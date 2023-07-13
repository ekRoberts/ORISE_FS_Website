library(shiny)
library(leaflet)
library(tidyverse)
library(leaflet.extras2)
library(leaflet.extras)
library(shinyscreenshot)
library(htmltools)
library(htmlwidgets)
library(rsconnect)
library(crosstalk)
library(DT)
library(plotly)
library(DBI)
library(RSQLite)
library(dplyr)



setwd('~/Desktop/PWS465/shinyapp')

con <- dbConnect(RSQLite::SQLite(), 'lichenDatabase.db')

lichen <- tbl(con, 'MegaDBLICHEN_2021')%>%
  collect()%>%
  as.data.frame() %>%
  mutate(row_id = row_number())

plot <- tbl(con, "MegaDbPLOT_2022")%>%
  collect()%>%
  as.data.frame()%>%
  mutate(row_id = row_number())

elemental <- tbl(con, "MegaDbELEMENT_noduplicateColumnscsv")%>%
  collect()%>%
  as.data.frame()%>%
  mutate(row_id = row_number())

easternElementalThresholds <- tbl(con, "easternElementalThresholds")%>%
  collect()%>%
  as.data.frame()
  

rownames(easternElementalThresholds) = easternElementalThresholds$field1

easternElementalThresholds = easternElementalThresholds %>% select(-field1)

dbDisconnect(con)


elemental$al_ppm <- as.numeric(elemental$al_ppm)
elemental$b_ppm <- as.numeric(elemental$b_ppm)
elemental$ba_ppm <- as.numeric(elemental$ba_ppm)
elemental$be_ppm <- as.numeric(elemental$be_ppm)
elemental$br_ppm <- as.numeric(elemental$br_ppm)
elemental$ca_ppm <- as.numeric(elemental$ca_ppm)
elemental$cd_ppm <- as.numeric(elemental$cd_ppm)
elemental$co_ppm <- as.numeric(elemental$co_ppm)
elemental$cr_ppm <- as.numeric(elemental$cr_ppm)
elemental$cu_ppm <- as.numeric(elemental$cu_ppm)
elemental$f_ppm <- as.numeric(elemental$f_ppm)
elemental$fe_ppm <- as.numeric(elemental$fe_ppm)
elemental$hg_ppb <- as.numeric(elemental$hg_ppb)
elemental$k_ppm <- as.numeric(elemental$k_ppm)
elemental$li_ppm <- as.numeric(elemental$li_ppm)
elemental$mg_ppm <- as.numeric(elemental$mg_ppm)
elemental$mn_ppm <- as.numeric(elemental$mn_ppm)
elemental$mo_ppm <- as.numeric(elemental$mo_ppm)
elemental$na_ppm <- as.numeric(elemental$na_ppm)
elemental$ni_ppm <- as.numeric(elemental$ni_ppm)
elemental$p_ppm <- as.numeric(elemental$p_ppm)
elemental$pb_ppm <- as.numeric(elemental$pb_ppm)
elemental$rb_ppm <- as.numeric(elemental$rb_ppm)
elemental$si_ppm <- as.numeric(elemental$si_ppm)
elemental$sn_ppm <- as.numeric(elemental$sn_ppm)
elemental$sr_ppm <- as.numeric(elemental$sr_ppm)
elemental$v_ppm <- as.numeric(elemental$v_ppm)
elemental$zn_ppm <- as.numeric(elemental$zn_ppm)
elemental$no3n_ppm <- as.numeric(elemental$no3n_ppm)
elemental$n_pct_adj<- as.numeric(elemental$n_pct_adj)
elemental$s_pct_adj<- as.numeric(elemental$s_pct_adj)

elemental$megadbid <- as.character(elemental$megadbid)

marker_info <- plot %>% select(megadbid,area, wilderns, plot, latusedd, longusedd)
marker_info_elemental <- plot %>% select(megadbid, nfs_reg, latusedd, longusedd)
marker_info$megadbid <- as.character(marker_info$megadbid)
lichen$megadbid <- as.character(lichen$megadbid)
marker_info$latusedd<- as.numeric(marker_info$latusedd)
marker_info$longusedd <- as.numeric(marker_info$longusedd)
marker_info_elemental$megadbid <- as.character(marker_info_elemental$megadbid)

plot_database <- plot

lichen_database <- left_join(lichen, marker_info,  by='megadbid')

elemental_database <- left_join(elemental, marker_info_elemental,  by='megadbid')


# this controls the front end of the app - how you would add new elements
ui <- fluidPage(
  
  tags$style(type = "text/css", "
             .irs-slider {width: 30px; height: 30px; top: 22px;}
             .irs-grid-text {font-size: 20px}
             .irs--shiny .irs-to, .irs--shiny .irs-from, .irs--shiny .irs-single{ font-size: 17px; color: black; background: transparent}"),
  sidebarPanel(
  
  #sliderInput("range", "Year", min(small_sample_data()$year, na.rm = T), max(small_sample_data()$year, na.rm = T), value = range(small_sample_data()$year,  na.rm = T), step = 1, sep = "", width = "100%"),
  radioButtons("data", #name of input
               label = "Data:", #label displayed in ui
               choices = c( "Elemental","Lichen", "Plot"),
               # calls unique values from the State column in the previously created table
  ),
  selectizeInput(label = "National Forest", inputId = 'national_forest_selector', choices = NULL),
  #htmlOutput("wilderness_selector"),
  selectizeInput(label = "Wilderness", inputId = 'wilderness', choices = c("No Selection")),  
  #htmlOutput('elemental_selector'),
  checkboxGroupInput(
    inputId='roundYear',
    label="Select the Round Years"
  ),
  uiOutput('lichen_ui'),
  uiOutput("elemental_ui"),
  uiOutput('plot_ui'),
  uiOutput('airscore_plot_ui'),
  uiOutput('airscore_ui'),
  uiOutput('lichen_list_ui'),
  uiOutput('datatable'),
  actionButton('resetSelection', "Reset Point Selection")
),
  # this renders the map on the page
  #'Aluminum', 'Boron', 'Barium','Beryllium','Bromine','Calcium','Cadmium','Cobalt','Chromium','Copper','Fluorine','Iron','Mercury','Potassium','Lithium','Magnesium','Manganese','Molybdenum','Sodium','Nickel','Phosphorus','Lead','Rubidium','Silicon','Tin','Strontium','Titanium','Vanadium','Zinc','Nitrogen'
  mainPanel(
  leafletOutput("mymap"),
  p(),
  #this puts the range slider on the page and gives it a max and a min
  #htmlOutput("filter_slider"),
  
  tableOutput("dataTable"),
  htmlOutput("dataPlot"),
  htmlOutput("fullData"),
  )
  ## a download button that pdownloads the map from the page 
  #actionButton("mymapDownload", label = "Download Map"),
  
)


# the server function controls the backend of the app
server <- function(input, output, session) {

  color_function <- function(element, lichen, currentData){
    lichen_names = colnames(easternElementalThresholds)
    
    revised_lichen_name = gsub(" ", "", lichen)
    
    if(revised_lichen_name %in% lichen_names){
      threshold = as.numeric(easternElementalThresholds[element, revised_lichen_name])
      print(threshold)
    }else{
      threshold = 100
    }
    
    element_data = fData() %>% select(input$element_selector) %>%pull()
    elemental_thresholds <-as.factor(ifelse(element_data <= (threshold*.9), 'green',
                                            ifelse(element_data > (threshold*.9) & element_data < (threshold*1.1), 'yellow', 
                                                   ifelse(element_data > (threshold*1.1) & element_data < (threshold*2), 'red', 
                                                         ifelse(element_data >= (threshold*2), 'magenta',"blue")))))
    return(elemental_thresholds)
  }
  
  small_sample_data <- reactive({
    if(input$data == "Lichen"){
      lichen_database %>%
        rename("reg_id" = nfs_reg)
    }else if(input$data == "Elemental"){
      elemental_database #%>%
      #mutate(year=make_date(year=year))

    }else if(input$data == "Plot"){
      plot_database %>%
        rename("reg_id" = nfs_reg)
    }
   })
  
observe({
  updateSelectizeInput(session, 'national_forest_selector', choices = c("No Selection",sort(as.vector(unique(small_sample_data()$area)))), selected = "No Selection",server = TRUE)
})

  
      
    
  observeEvent(input$national_forest_selector, {
    #print("We started the update selector observe")
    #print(length(small_sample_data()))
    if(!is.null(small_sample_data()) & length(input$national_forest_selector) != 0  & input$national_forest_selector != "No Selection"){
      #print("Am I getting here? This is the wilderness selector")
      wildernesses = small_sample_data() %>% filter(small_sample_data()$area == input$national_forest_selector)%>% select(wilderns) %>% unique() %>% as.vector()
      updateSelectizeInput(session, 'wilderness', choices = c("No Selection",wildernesses),server = TRUE)
      
    }else{
      wildernesses = small_sample_data() %>% select(wilderns) %>% unique() %>% as.vector()
      updateSelectizeInput(session, 'wilderness', choices = c("No Selection",wildernesses),server = TRUE)
      
      }

    if(input$data == "Elemental" & (input$national_forest_selector != "No Selection" | input$wilderness != "No Selection" )){
      print("This is the lichen selector")
      lichen = small_sample_data() %>% filter(small_sample_data()$area == input$national_forest_selector)%>% select(sciname) %>% unique() %>% as.vector()
      updateSelectizeInput(session, 'lichen_selector', choices = c("No Selection",lichen),server = TRUE)
    }else if(input$national_forest_selector == "No Selection" & input$wilderness == "No Selection"){
      print("Do we come here?")
      lichen = small_sample_data() %>% select(sciname) %>% unique() %>% as.vector()
      updateSelectizeInput(session, 'lichen_selector', choices = c("No Selection",lichen),server = TRUE)
    }

  })
  
  round_choices <- reactive({
    #print("We are in the round choice observe")
      if(!is.null(input$lichen_selector)){
        if(input$lichen_selector != "No Selection" & input$national_forest_selector == "No Selection" & input$wilderness == "No Selection"){
          updateCheckboxGroupInput(session, "roundYear", choices = as.vector(small_sample_data() %>% filter(small_sample_data()$sciname == input$lichen_selector) %>%select(roundno)%>%pull()%>%sort()%>%unique()), selected = as.vector(small_sample_data()%>%filter(small_sample_data()$sciname == input$lichen_selector) %>%select(roundno)%>%pull()%>%sort()%>%unique()))
          as.vector(small_sample_data() %>% filter(small_sample_data()$sciname == input$lichen_selector) %>%select(roundno)%>%pull()%>%sort()%>%unique())
          
        }else if(input$wilderness != "No Selection"){
          updateCheckboxGroupInput(session, "roundYear", choices = as.vector(small_sample_data() %>% filter(small_sample_data()$wilderns == input$wilderness) %>%select(roundno)%>%pull()%>%sort()%>%unique()), selected = as.vector(small_sample_data()%>%filter(small_sample_data()$wilderns == input$wilderness) %>%select(roundno)%>%pull()%>%sort()%>%unique()))
          as.vector(small_sample_data() %>% filter(small_sample_data()$area == input$national_forest_selector) %>%select(roundno)%>%pull()%>%sort()%>%unique())
          
        }else{
          #print("We are in the round choice else statement")
          updateCheckboxGroupInput(session, "roundYear", choices = as.vector(small_sample_data() %>% filter(small_sample_data()$area == input$national_forest_selector) %>%select(roundno)%>%pull()%>%sort()%>%unique()), selected = as.vector(small_sample_data()%>%filter(small_sample_data()$area == input$national_forest_selector) %>%select(roundno)%>%pull()%>%sort()%>%unique()))
          as.vector(small_sample_data() %>% filter(small_sample_data()$area == input$national_forest_selector) %>%select(roundno)%>%pull()%>%sort()%>%unique())
          
        }
      }else{
        #print("We are in the round choice else statement")
        updateCheckboxGroupInput(session, "roundYear", choices = as.vector(small_sample_data() %>% filter(small_sample_data()$area == input$national_forest_selector) %>%select(roundno)%>%pull()%>%sort()%>%unique()), selected = as.vector(small_sample_data()%>%filter(small_sample_data()$area == input$national_forest_selector) %>%select(roundno)%>%pull()%>%sort()%>%unique()))
        as.vector(small_sample_data() %>% filter(small_sample_data()$area == input$national_forest_selector) %>%select(roundno)%>%pull()%>%sort()%>%unique())
        
      }

  })


  fData <- reactive({
    if(is.null(input$roundYear)){
      #print("This is the null input filter")
      #print(input$roundYear)
      #print(round_choices())
      data_to_send = small_sample_data() %>% filter(small_sample_data() $roundno %in% round_choices())
      data_to_send
    }else{
      #print('This is where the rounds are filtered')
      exclude = setdiff(round_choices(), input$roundYear)
      if(length(exclude) != 0){
        #print("Exclude does not equal 0")
        #print(input$roundYear)
        data_to_send = small_sample_data()  %>% filter(!small_sample_data() $roundno %in% exclude)
        data_to_send
      }else{
        #print("Exclude DOES equal 0")
        #print(input$roundYear)
        data_to_send =small_sample_data()  %>% filter(small_sample_data() $roundno %in% input$roundYear)
        data_to_send
      }
    }
    
    #print("a lichen is being selected")
    if(!is.null(input$lichen_selector)){
      if(input$lichen_selector != "No Selection"){
        #print("in Null selector")
        if(input$wilderness == "No Selection" & input$national_forest_selector == "No Selection" ){
          data_to_send = data_to_send %>% filter(data_to_send$sciname == input$lichen_selector)
          data_to_send
        }else if(input$wilderness != "No Selection"){
          data_to_send =data_to_send %>% filter(data_to_send$wilderns == input$wilderness & data_to_send$sciname == input$lichen_selector)
          data_to_send
        }else{
          data_to_send = data_to_send %>% filter(data_to_send$area == input$national_forest_selector &data_to_send$sciname == input$lichen_selector)
          data_to_send
        }
      }else{
        if(input$wilderness != "No Selection"){
          #print("we are in the first wilderness if statement")
          data_to_send = data_to_send %>% filter(data_to_send$wilderns == input$wilderness) 
          data_to_send
        }else{
          data_to_send = data_to_send %>% filter(data_to_send$area == input$national_forest_selector) 
          
        }
      }
    }else{
      if(input$wilderness != "No Selection"){
        #print("we are in the second wilderness if statement")
        data_to_send = data_to_send %>% filter(data_to_send$wilderns == input$wilderness) 
        data_to_send
      }else{
        data_to_send = data_to_send %>% filter(data_to_send$area == input$national_forest_selector) 
        data_to_send
      }
    }
      })
  
  
  current_species <- reactive({
    if(input$wilderness != "No Selection"){
          small_sample_data() %>% filter(small_sample_data()$wilderns == input$wilderness) %>% select(sciname) %>% pull() %>% unique() %>% as.vector() %>% sort()
    }else{
      small_sample_data() %>% filter(small_sample_data()$area == input$national_forest_selector) %>% select(sciname) %>% pull() %>% unique() %>% as.vector() %>% sort()
    }
    
  })
  
  observeEvent(input$resetSelection,{
    output$dataPlot <- renderUI({
      return(NULL)
    })
  })
  
  filteredData <- SharedData$new(fData)
  
  #this gives the map in the UI output its data
  map_reactive <- reactive({
    fillColor = "purple"
    if(input$data == "Elemental"){
      if(length(input$plot_type) != 0 & length(input$element_selector) != 0 & length(input$lichen_selector) != 0){
      if(input$element_selector == "No Selection"){
        fillColor = "purple"
      }else{
        fillColor = color_function(input$element_selector, input$lichen_selector, filteredData$data())

        leafletProxy("mymap", data = filteredData)%>%
              addLegend('bottomleft', colors = c("green", "yellow", "red", "magenta", "blue") , labels=c("<90% of threshold", "Between 90% and 110% of threshold","Between 110% and 200% of threshold", ">200% of threshold", "NA") ,
                        title = 'Color Gradient for Aluminium (parts per million)',
                        opacity = 1)
      }
      }
    }else if(input$data == "Plot"){
      if(length(input$plot_type) != 0 & length(input$airscore_value) != 0){
          fillColor = ~ ifelse(input$airscore_value > 7 & input$airscore_value < 4, "red", "green")
          # leafletProxy("mymap", data = filteredData)%>%
          #   addLegend('bottomleft', pal = get(paste0(input$element_selector,"_color"))  ,values = as.formula(paste0('~',input$element_selector,'_factor')) ,
          #             title = 'Color Gradient for Aluminium (parts per million)',
          #             opacity = 1)
        }
    }else{
      fillColor = "purple"
    }
    

    
    leaflet(data = filteredData) %>%
      addProviderTiles(providers$Stamen.TonerLite, options = providerTileOptions(noWrap = TRUE), group = "Basic Map") %>%
      addProviderTiles(providers$Esri.WorldImagery, options = providerTileOptions(noWrap = TRUE), group = "Topographical")%>%
      addProviderTiles(providers$Esri.WorldTopoMap, options = providerTileOptions(noWrap = TRUE), group = "Lined Topographical")%>%
      addCircleMarkers(~longusedd, ~latusedd, radius = 5,stroke=FALSE,fillOpacity = 1, fillColor = fillColor, layerId = ~row_id, popup = (paste("Year Sampled: ",fData()$year ,"<br>","Lichen Species: ",fData()$sciname, "<br>", "National Forest: ",fData()$area, "<br>", "Wilderness: ",fData()$wilderns, "<br>","State: ",fData()$state, "<br>", "County: ",fData()$county, "<br>","Plot Type: ", fData()$dataset2,"<br>","Plot: ",fData()$plot, "<br>","Megadbid: ", fData()$megadbid))) %>% #, color = ~circleMarkerOutline(ba_ppm_factor), stroke = T, weight = 0.4, fillColor = ~ba_ppm_color(ba_ppm_factor), fillOpacity = ~factop(ba_ppm_factor), group = "Barium")%>%
      addLayersControl(
      baseGroups = c("Lined Topographical", "Topographical","Basic Map"),
      options = layersControlOptions(collapsed = FALSE) )
          })
  
  observeEvent(list(input$data, input$national_forest_selector, input$wilderness), {
    
    if(input$data != "Elemental"){
      output$lichen_ui <- renderUI({
        return(NULL)
      })
      output$elemental_ui <-renderUI({
        return(NULL)
      })
      output$plot_ui <-renderUI({
        return(NULL)
      })
    }else if(input$data == "Elemental"){
      #selectizeInput(label = "Indicator Lichen Species", inputId = 'lichen_selector', choices = c("No Selection",as.vector(unique(small_sample_data()$sciname))))
      #print("was this updated?")
      
      if(input$wilderness == "No Selection" & input$national_forest_selector == "No Selection"){
        print("are we getting past the fData if")
        output$lichen_ui <- renderUI(
          selectizeInput(label = "Indicator Lichen Species", inputId = 'lichen_selector', choices = c("No Selection",sort(as.vector(unique(small_sample_data()$sciname))))),
          )
      }else{
        output$lichen_ui <- renderUI(
          selectizeInput(label = "Indicator Lichen Species", inputId = 'lichen_selector', choices = c("No Selection", current_species())),
          
        )
      }

      output$elemental_ui <-renderUI(
        selectInput("element_selector", "Elemental Analysis", choices = c('No Selection','Aluminum'='al_ppm', 'Boron'='b_ppm', 'Barium'='ba_ppm','Beryllium'='be_ppm','Bromine'='br_ppm','Calcium'='ca_ppm','Cadmium'='cd_ppm','Cobalt'='co_ppm','Chromium'='cr_ppm','Copper'='cu_ppm','Fluorine'='f_ppm','Iron'='fe_ppm','Mercury'='hg_ppb','Potassium'='k_ppm','Lithium'='li_ppm','Magnesium'='mg_ppm','Manganese'='mn_ppm','Molybdenum'='mo_ppm','Sodium'='na_ppm','Nickel'='ni_ppm','Phosphorus'='p_ppm','Lead'='pb_ppm','Rubidium'='rb_ppm','Silicon'='si_ppm','Tin'='sn_ppm','Strontium'='sr_ppm','Titanium'='ti_ppm','Vanadium'='v_ppm','Zinc'='zn_ppm','Nitrogen'='n_pct_adj', 'Sulfur'='s_pct_adj')),

      )
      output$plot_ui <-renderUI(
        selectInput("plot_type", "Plot Type", choices = c("Scatter Plot"="scatter", "Box Plot" = "box", "Histogram"="histogram", "Box Plot (whole selection area)" = 'whole box plot', "Data Table" = "data table"))
      )
    }
    if(input$data != "Plot"){
      output$airscore_ui <- renderUI({
        return(NULL)
      })
      output$airscore_plot_ui <-renderUI({
        return(NULL)
      })
    }else if(input$data == "Plot"){
      output$airscore_ui <-renderUI(
        #selector = "#placeholder",
        selectInput("airscore_value", "Airscore Value", choices = c("Nitrogen (Climate Adjusted)"="n_airscore_clim_adj", "Sulfur (Climate Adjusted)" = "s_airscore_clim_adj"))
      )
      output$airscore_plot_ui <-renderUI(
        #selector = "#placeholder",
        selectInput("plot_type", "Plot Type", choices = c("Scatter Plot"="scatter", "Box Plot" = "box", "Histogram"="histogram", "Box Plot (whole selection area)" = 'whole box plot', "Data Table" = "data table"))
      )
    }
    if(input$data != "Lichen"){
      output$lichen_list_ui <- renderUI({
        return(NULL)
      })
    }else if(input$data == "Lichen"){
      output$lichen_list_ui <-renderUI(
        #selector = "#placeholder",
        selectInput("lichen_type", "Select Lichen Type", choices = c("All Lichen", "Pollution Sensitive Lichen"))
      )
      output$datatable <-renderUI(
        checkboxInput("wantDataTable", "Show Data Table", FALSE)
            )
    }
  })
     
  
  output$mymap <- renderLeaflet({
    map_reactive()
  })
  
  currentPlotData <- reactive({
    if(is.null(filteredData$selection())){
      filteredData$data()
    }else{
      filteredData$data()[filteredData$selection(),]
    }
  })
  
  element_plot_reactive <- reactive({
    
    lichen_names = colnames(easternElementalThresholds)
    
    revised_lichen_name = gsub(" ", "", input$lichen_selector)
    
    if(revised_lichen_name %in% lichen_names){
      threshold = as.numeric(easternElementalThresholds[input$element_selector, revised_lichen_name])
      print(threshold)
    }else{
      threshold = 100
    }
    
    element_data = currentPlotData() %>% select(input$element_selector) %>%pull()
    #print(values$current_megadbid)
    data_for_plot = currentPlotData() %>% mutate(Color = ifelse(element_data<= (threshold*.9), 'green', ifelse(element_data  > (threshold*.9) & element_data < (threshold*1.1), 'yellow', ifelse(element_data> (threshold*1.1) & element_data < (threshold*2), 'red', ifelse(element_data>= (threshold*2), 'magenta',"blue")))))

    if(input$plot_type == "box"){
      first_plot <- ggplot(currentPlotData(), aes(y = .data[[input$element_selector]], x=plotno))+
        geom_boxplot()+
        facet_wrap(~roundno, nrow = length(input$roundYear), scales = "free")+
        theme_bw()+
        theme(axis.text.x = element_text(angle = 90, size = 10), axis.text.y = element_text(size = 10))+
        labs(x = "Survey Plot", title = paste("Box Plot of",input$element_selector ,"Concentration"))
      ggplotly(first_plot,height = 500, width = 1500)%>% add_trace(hoverinfo = 'plotno')
     
    }else if(input$plot_type == "scatter"){
      first_plot <- ggplot(data_for_plot, aes(y = .data[[input$element_selector]], x=plotno, color = Color))+
        scale_color_identity()+
        geom_jitter()+
        facet_wrap(~roundno, nrow = length(input$roundYear), scales = "free")+
        theme_bw()+
        theme(axis.text.x = element_text(angle = 90, size = 10), axis.text.y = element_text(size = 10),legend.position = "none")+
        labs(x = "Survey Plot", title = paste("Scatter Plot of",input$element_selector ,"Concentration"))
      ggplotly(first_plot,height = 500, width = 1500) #%>% add_trace(hoverinfo = 'plotno')
    }else if(input$plot_type == "histogram"){
      #elemental <- currentPlotData() %>% filter(input$element_selector != 0)
      element <- currentPlotData() %>% select(input$element_selector) %>% unlist() %>% unname()
      print(str(element))
      print(mean(element, na.rm = T))
      print(sd(element, na.rm = T))
      first_plot <- ggplot(currentPlotData(), aes(x = .data[[input$element_selector]]))+
        geom_histogram(aes(y = ..density..))+
        facet_wrap(~roundno, nrow = length(input$roundYear), scales = "free")+
        theme_bw()+
        theme(axis.text.x = element_text(angle = 90, size = 10), axis.text.y = element_text(size = 10))+
        labs(x = "Survey Plot", title = paste("Histogram of",input$element_selector ,"Concentration"))+
        stat_function(fun = dnorm, col = 'red',args = list(mean=mean(element, na.rm = T), sd=sd(element, na.rm = T)))
      ggplotly(first_plot,height = 500, width = 1500)
      
    }else if(input$plot_type == "whole box plot"){
        if(input$national_forest_selector != "No Selection" & input$wilderness == "No Selection"){
          first_plot <- ggplot(currentPlotData(), aes(y = .data[[input$element_selector]], x=area))+
            geom_boxplot()+
            facet_wrap(~roundno, ncol = length(input$roundYear), scales = "free")+
            theme_bw()+
            theme(axis.text.x = element_text(size = 10), axis.text.y = element_text(size = 10))+
            labs(x = "Survey Plot", title = paste("Box Plot of",input$element_selector ,"Concentration for Whole Forest"))
          ggplotly(first_plot,height = 500, width = 600)
      }else{
        first_plot <- ggplot(currentPlotData(), aes(y =.data[[input$element_selector]], x=wilderns))+
          geom_boxplot()+
          facet_(~roundno, ncol = length(input$roundYear), scales = "free")+
          theme_bw()+
          theme(axis.text.x = element_text(size = 10), axis.text.y = element_text(size = 10))+
          labs(x = "Survey Plot", title = paste("Box Plot of",input$element_selector ,"Concentration for Whole Wilderness"))
        ggplotly(first_plot,height = 500, width = 600)
      }
    }

  })
  
  airscore_plot_reactive <- reactive({
    if(input$plot_type == "box"){
      first_plot <- ggplot(currentPlotData(), aes(y = .data[[input$airscore_value]], x='plot'))+
        geom_boxplot()+
        #geom_jitter(color="black", size=0.4, alpha=0.9) +
        facet_wrap(~roundno, nrow = length(input$roundYear), scales = "free")+
        theme_bw()+
        theme(axis.text.x = element_text(angle = 90, size = 10), axis.text.y = element_text(size = 10))+
        labs(x = "Survey Plot")
      ggplotly(first_plot,height = 500, width = 1500)
      
    }else if(input$plot_type == "scatter"){
      first_plot <- ggplot(subset(currentPlotData(),!is.na(input$airscore_value)), aes(y = .data[[input$airscore_value]], x='plot'))+
        geom_jitter(width = 0.15)+
        #geom_jitter(color="black", size=0.4, alpha=0.9) +
        facet_wrap(~roundno, nrow = length(input$roundYear), scales = "free")+
        theme_bw()+
        geom_hline(yintercept=7, color = "red")+
        theme(axis.text.x = element_text(angle = 90, size = 10), axis.text.y = element_text(size = 10))+
        labs(x = "Survey Plot", title = paste("Scatter Plot of", input$airscore_value))
      ggplotly(first_plot,height = 500, width = 1500)%>% add_trace(hoverinfo = 'plot')
    }else if(input$plot_type == "histogram"){
      first_plot <- ggplot(currentPlotData(), aes(x = .data[[input$airscore_value]]))+
        geom_histogram()+
        #geom_jitter(color="black", size=0.4, alpha=0.9) +
        facet_wrap(~roundno, nrow = length(input$roundYear), scales = "free")+
        theme_bw()+
        theme(axis.text.x = element_text(angle = 90, size = 10), axis.text.y = element_text(size = 10))+
        labs(x = "Survey Plot")
      ggplotly(first_plot,height = 500, width = 1500)
    }else if(input$plot_type == "whole box plot"){
      if(input$national_forest_selector != "No Selection" & input$wilderness == "No Selection"){
        first_plot <- ggplot(currentPlotData(), aes(y = .data[[input$airscore_value]], x='area'))+
          geom_boxplot()+
          #geom_jitter(color="black", size=0.4, alpha=0.9) +
          facet_wrap(~roundno, ncol = length(input$roundYear), scales = "free")+
          theme_bw()+
          theme(axis.text.x = element_text(size = 10), axis.text.y = element_text(size = 10))+
          labs(x = "Survey Plot")
        ggplotly(first_plot,height = 500, width = 1500)
      }else{
        first_plot <- ggplot(currentPlotData(), aes(y = .data[[input$airscore_value]], x='wilderns'))+
          geom_boxplot()+
          #geom_jitter(color="black", size=0.4, alpha=0.9) +
          facet_wrap(~roundno, ncol = length(input$roundYear), scales = "free")+
          theme_bw()+
          theme(axis.text.x = element_text(size = 10), axis.text.y = element_text(size = 10))+
          labs(x = "Survey Plot")
        ggplotly(first_plot,height = 500, width = 1500)
      }
    }
  })
  
  observe({
      if(input$data == "Elemental"){
        if(length(input$plot_type) != 0 & length(input$element_selector) != 0 & length(input$lichen_selector) != 0){
          if(input$plot_type == "data table"){
            output$dataPlot <-  renderUI({ DT::renderDataTable({
              toDataTable <- currentPlotData()%>% select(sciname, input$element_selector, area, wilderns, county, state, plot, year)
              datatable(toDataTable)
            }, server = FALSE)
            })
          }
          
          
          if(input$element_selector == "No Selection"){
            output$dataPlot <- renderUI({
              renderText({
                "Select an element to see a plot of the selection area"
                
              })
            })
          }else{
            if(input$plot_type == "data table"){
              output$dataPlot <- renderUI({ DT::renderDataTable({
                toDataTable <- currentPlotData()%>% select(sciname, input$element_selector, area, wilderns, county, state, plot, year)
                datatable(toDataTable)
              }, server = FALSE)
              })
            }else{
              output$dataPlot <-renderUI({
                renderPlotly({
                  element_plot_reactive()
                  
                })
              })
            }
            
          }
          
        }
      }
    if(input$data == "Plot"){
      if(input$national_forest_selector == "No Selection"){
        output$dataPlot <- renderUI({
          renderText({
            "Select a National Forest to produce a plot"
            
          })
        })
      }else if(length(input$plot_type) != 0 & length(input$airscore_value) != 0){
      if(input$plot_type == "data table"){
          output$dataPlot <- renderUI({ DT::renderDataTable({
            toDataTable <- currentPlotData()%>% select(sciname, input$airscore_value, area, wilderns, county, state, plot, year)
            datatable(toDataTable)
          }, server = FALSE)
          })
      }else{
        output$dataPlot <-renderUI({
          renderPlotly({
            airscore_plot_reactive()
            
          })
        })
      }
      }
    }
    
    if(input$data == "Lichen"){
      if(length(input$lichen_type) != 0){
        output$dataPlot <-renderUI({
          
          current_year_round <- currentPlotData() %>% select(roundno) %>% pull()%>%unique()%>%as.vector()
          lichen_lists = c()
         
          for(round in current_year_round){
              lichen_lists = c(lichen_lists, currentPlotData() %>% filter(roundno == round)%>%pull(sci_22chklst)%>%unique()%>%as.vector())
          }
          lichen_lists_ordered = sort(as.vector(unique(lichen_lists)))
          HTML(paste('', lichen_lists_ordered, sep='<br/>'))
        })
        
        
        if(input$wantDataTable){
          output$fullData <- renderUI({ DT::renderDataTable({
            toDataTable <- currentPlotData()%>% select(commonname, sci_22chklst, growthform,auth_22,n_class,s_class,year,plot,area, wilderns, county, state,  )
            datatable(toDataTable)
          }, server = FALSE)
          })
        }else{
          output$fullData <- renderUI({
            return(NULL)
          })
        }
      }
    }
    })
  
  values <- reactiveValues(current_megadbid = NULL, current_plot = NULL)
  
  single_element_plot_reactive <- reactive({
    
    lichen_names = colnames(easternElementalThresholds)
    
    revised_lichen_name = gsub(" ", "", input$lichen_selector)
    
    if(revised_lichen_name %in% lichen_names){
      threshold = as.numeric(easternElementalThresholds[input$element_selector, revised_lichen_name])
      print(threshold)
    }else{
      threshold = 100
    }
    
    
    element_data = fData() %>% filter(plotno == values$current_plot) %>% select(input$element_selector) %>%pull()
    #print(values$current_megadbid)
    data_for_plot = fData() %>% filter(plotno == values$current_plot) %>% mutate(Color = ifelse(element_data<= (threshold*.9), 'green', ifelse(element_data > (threshold*.9) & element_data < (threshold*1.1), 'yellow', ifelse(element_data > (threshold*1.1) & element_data < (threshold*2), 'red', ifelse(element_data >= (threshold*2), 'magenta',"blue")))))
    
    if(input$plot_type == "box"){
      first_plot <- ggplot(data_for_plot, aes(y = .data[[input$element_selector]], x=plotno))+
        geom_boxplot()+
        facet_wrap(~roundno, nrow = length(input$roundYear), scales = "free")+
        theme_bw()+
        theme(axis.text.x = element_text(angle = 90, size = 10), axis.text.y = element_text(size = 10))+
        labs(x = "Survey Plot", title = paste("Box Plot of",input$element_selector ,"Concentration"))
      ggplotly(first_plot,height = 500, width = 500)
      
    }else if(input$plot_type == "scatter"){
      #print(data_for_plot)
      first_plot <- ggplot(data_for_plot, aes(y = .data[[input$element_selector]], x=plotno,  color = Color))+
        scale_color_identity()+
        geom_jitter()+
        facet_wrap(~roundno, nrow = length(input$roundYear), scales = "free")+
        theme_bw()+
        theme(axis.text.x = element_text(angle = 90, size = 10), axis.text.y = element_text(size = 10), legend.position = "none")+
        labs(x = "Survey Plot", title = paste("Scatter Plot of",input$element_selector ,"Concentration"))
      ggplotly(first_plot,height = 500, width = 500)
    }else if(input$plot_type == "histogram"){
      first_plot <- ggplot(data_for_plot, aes(x = .data[[input$element_selector]]))+
        geom_histogram()+
        facet_wrap(~roundno, nrow = length(input$roundYear), scales = "free")+
        theme_bw()+
        theme(axis.text.x = element_text(angle = 90, size = 10), axis.text.y = element_text(size = 10))+
        labs(x = "Survey Plot", title = paste("Histogram of",input$element_selector ,"Concentration"))
      ggplotly(first_plot,height = 500, width = 500)
    }else if(input$plot_type == "whole box plot"){
      if(input$national_forest_selector != "No Selection" & input$wilderness == "No Selection"){
        first_plot <- ggplot(data_for_plot, aes(y = .data[[input$element_selector]], x=area))+
          geom_boxplot()+
          facet_wrap(~roundno, ncol = length(input$roundYear), scales = "free")+
          theme_bw()+
          theme(axis.text.x = element_text(size = 10), axis.text.y = element_text(size = 10))+
          labs(x = "Survey Plot", title = paste("Box Plot of",input$element_selector ,"Concentration for Whole Forest"))
        ggplotly(first_plot,height = 500, width = 500)
      }else{
        first_plot <- ggplot(data_for_plot, aes(y = .data[[input$element_selector]], x=wilderns))+
          geom_boxplot()+
          facet_(~roundno, ncol = length(input$roundYear), scales = "free")+
          theme_bw()+
          theme(axis.text.x = element_text(size = 10), axis.text.y = element_text(size = 10))+
          labs(x = "Survey Plot", title = paste("Box Plot of",input$element_selector ,"Concentration for Whole Wilderness"))
        ggplotly(first_plot,height = 500, width = 500)
      }
    }
    
  })
  
  single_airscore_plot_reactive <- reactive({
    data_for_plot = fData() %>% filter(plot == values$current_plot)
    if(input$plot_type == "box"){
      first_plot <- ggplot(data_for_plot, aes(y = .data[[input$airscore_value]], x='plot'))+
        geom_boxplot()+
        #geom_jitter(color="black", size=0.4, alpha=0.9) +
        facet_wrap(~roundno, nrow = length(input$roundYear), scales = "free")+
        theme_bw()+
        theme(axis.text.x = element_text(angle = 90, size = 10), axis.text.y = element_text(size = 10))+
        labs(x = "Survey Plot")
      ggplotly(first_plot,height = 500, width = 500)
      
    }else if(input$plot_type == "scatter"){
      first_plot <- ggplot(subset(data_for_plot,!is.na(input$airscore_value)), aes(y = .data[[input$airscore_value]], x='plot'))+
        geom_jitter(width = 0.15)+
        #geom_jitter(color="black", size=0.4, alpha=0.9) +
        facet_wrap(~roundno, nrow = length(input$roundYear), scales = "free")+
        theme_bw()+
        geom_hline(yintercept=7, color = "red")+
        theme(axis.text.x = element_text(angle = 90, size = 10), axis.text.y = element_text(size = 10))+
        labs(x = "Survey Plot", title = paste("Scatter Plot of", input$airscore_value))
      ggplotly(first_plot,height = 500, width = 500)
    }else if(input$plot_type == "histogram"){
      first_plot <- ggplot(data_for_plot, aes(x = .data[[input$airscore_value]]))+
        geom_histogram()+
        #geom_jitter(color="black", size=0.4, alpha=0.9) +
        facet_wrap(~roundno, nrow = length(input$roundYear), scales = "free")+
        theme_bw()+
        theme(axis.text.x = element_text(angle = 90, size = 10), axis.text.y = element_text(size = 10))+
        labs(x = "Survey Plot")
      ggplotly(first_plot,height = 500, width = 500)
    }else if(input$plot_type == "whole box plot"){
      if(input$national_forest_selector != "No Selection" & input$wilderness == "No Selection"){
        first_plot <- ggplot(data_for_plot, aes_string(y = .data[[input$airscore_value]], x='area'))+
          geom_boxplot()+
          #geom_jitter(color="black", size=0.4, alpha=0.9) +
          facet_wrap(~roundno, ncol = length(input$roundYear), scales = "free")+
          theme_bw()+
          theme(axis.text.x = element_text(size = 10), axis.text.y = element_text(size = 10))+
          labs(x = "Survey Plot")
        ggplotly(first_plot,height = 500, width = 500)
      }else{
        first_plot <- ggplot(data_for_plot, aes(y = .data[[input$airscore_value]], x='wilderns'))+
          geom_boxplot()+
          #geom_jitter(color="black", size=0.4, alpha=0.9) +
          facet_wrap(~roundno, ncol = length(input$roundYear), scales = "free")+
          theme_bw()+
          theme(axis.text.x = element_text(size = 10), axis.text.y = element_text(size = 10))+
          labs(x = "Survey Plot")
        ggplotly(first_plot,height = 500, width = 500)
      }
    }
  })
  

  observeEvent(input$mymap_marker_click, {
    click<-input$mymap_marker_click
    if(is.null(click)){
      return()
    }else{

      if(input$data == "Lichen"){

        values$current_plot = fData() %>% filter(row_id == click$id) %>% select(plot_use) %>% pull()

        if(length(input$lichen_type) != 0){
          output$dataPlot <-renderUI({

            current_year_round <- currentPlotData() %>% select(roundno) %>% pull()%>%unique()%>%as.vector()
            lichen_lists = c()

            for(round in current_year_round){
              lichen_lists = c(lichen_lists, currentPlotData() %>% filter(plot_use == values$current_plot &roundno == round)%>%pull(sci_22chklst)%>%unique()%>%as.vector())
            }
            lichen_lists_ordered = sort(as.vector(unique(lichen_lists)))
            HTML(paste('', lichen_lists_ordered, sep='<br/>'))
          })
        }
      }else if(input$data == "Elemental" & input$element_selector != "No Selection"){

        values$current_plot = fData() %>% filter(row_id == click$id) %>% select(plotno) %>% pull()

        output$dataPlot <-renderUI({
          renderPlotly({
            single_element_plot_reactive()

          })
        })



      }else if(input$data == "Plot"){

        values$current_plot = fData() %>% filter(row_id == click$id) %>% select(plot) %>% pull()

        output$dataPlot <-renderUI({
          renderPlotly({
            single_airscore_plot_reactive()

          })
        })
      }

    }



  })


  # output$fullData <- DT::renderDataTable({
  #   datatable(filteredData)
  # }, server = FALSE)
  
  factop <- function(x) {
    ifelse(is.na(x), 0, 1)
  }
  circleMarkerOutline <- function(x)  {
    ifelse(is.na(x), F,"black")
  }
  
}

shinyApp(ui, server)