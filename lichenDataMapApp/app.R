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


#This creates the connection with the SQLite database and allows us to pull out the 3 main tables
con <- dbConnect(RSQLite::SQLite(), 'lichenDatabase.db')

lichen <- tbl(con, 'MegaDBLICHEN_2021')%>%
  collect()%>%
  as.data.frame() %>%
  dplyr::mutate(row_id = dplyr::row_number())

plot <- tbl(con, "MegaDbPLOT_2022")%>%
  collect()%>%
  as.data.frame()%>%
  dplyr::mutate(row_id = dplyr::row_number())

elemental <- tbl(con, "MegaDbELEMENT_noduplicateColumnscsv")%>%
  collect()%>%
  as.data.frame()%>%
  dplyr::mutate(row_id = dplyr::row_number())
  

#This disconnects us from the database after we have pulled our info
dbDisconnect(con)



#When the data is pulled from the database some of the columns are not stored as numeric.
#For graphing purposes the columns need to be coereced to a numerical form
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
#This is so the columns from the different databases can be joined
elemental$megadbid <- as.character(elemental$megadbid)

lichen <- lichen %>% select(-lichcoll)
#This is so the columns from the different databases can be joined
lichen$megadbid <- as.character(lichen$megadbid)

plot$n_airscore <- as.numeric(plot$n_airscore)
plot$n_airscore_clim_adj <- as.numeric(plot$n_airscore_clim_adj)
plot$s_airscore <- as.numeric(plot$s_airscore)
plot$s_airscore_clim_adj <- as.numeric(plot$s_airscore_clim_adj)
plot$cmaq_n_3yroll <- as.numeric(plot$cmaq_n_3yroll)
plot$cmaq_s_3yroll <- as.numeric(plot$cmaq_s_3yroll)
plot$longuseNAD83<- as.numeric(plot$longuseNAD83)
plot$longuseNAD83 <- as.numeric(plot$longuseNAD83)
plot$megadbid <- as.character(plot$megadbid)
plot$spprich_oligo <- as.numeric(plot$spprich_oligo)
plot$spprich_s_sens <- as.numeric(plot$spprich_s_sens)
plot$spprich_total <- as.numeric(plot$spprich_total)
plot$spprich_epimac <- as.numeric(plot$spprich_epimac)
plot$spprich_forage <- as.numeric(plot$spprich_forage)
plot$spprich_cyano <- as.numeric(plot$spprich_cyano)

#These dataframes are to add information from the plot dataframe to the other two dataframes for mapping and visulization purposes 
marker_info <- plot %>% select(megadbid,lichcoll, area, wilderns, latuseNAD83, longuseNAD83, locale, fia_prot, eluseft, habitat, fia_hab, ubc_mat, ubc_map, cmaq_n_3yroll, cmaq_s_3yroll)
marker_info_elemental <- plot %>% select(megadbid, latuseNAD83, longuseNAD83)
marker_info$megadbid <- as.character(marker_info$megadbid)


#create the three main dataframes
plot_database <- plot

lichen_database <- left_join(lichen, marker_info,  by='megadbid')

elemental_database <- left_join(elemental, marker_info_elemental,  by='megadbid')


# this controls the front end of the app - how you would add new elements
ui <- fluidPage(
  
  #Makes the title in the shiny app
  titlePanel("Lichen Data Query and Mapping Tool"),
  
  #This is where all of the selection boxes are housed
  sidebarPanel(
  
  #These radio buttons allow users to select the dataframe they want to work with
  radioButtons("data", #this is the name you will use to access the current input ex: input$data
               label = "Data:", #name that appears above the radio buttons
               choices = c( "Elemental","Lichen", "Plot"),
  ),
  
  #Create the National Forest and Wilderness selectors- these are populated in the server because they change based on user input
  selectizeInput(label = "National Forest", inputId = 'national_forest_selector', choices = NULL),
  selectizeInput(label = "Wilderness", inputId = 'wilderness', choices = c("No Selection")),  

  #This check box group changes dynamically in the server based on the round years from the user selected data
  checkboxGroupInput(
    inputId='roundYear',
    label="Select the Round Years"
  ),
  
  #Based on the dataframe selected by the user different selection options are made available for the user
  #THese are placeholders for those selectors which are populated in the server.
  uiOutput('lichen_ui'),
  uiOutput("elemental_ui"),
  uiOutput('plot_ui'),
  uiOutput('airscore_plot_ui'),
  uiOutput('airscore_ui'),
  uiOutput('lichen_list_ui'),
  
  #This turns on and off the display of the data table 
  checkboxInput("wantDataTable", "Show Data Table", TRUE),
  
  #This resets the graphing tool after a single point has been selected
  actionButton('resetSelection', "Reset Point Selection"),
  
  #This allows the user to download the current data selection
  downloadButton("downloadData", "Download Data Selection")
),

#Panel where the map, graph, and datatable are output
  mainPanel(
  #map output  
  leafletOutput("mymap"),
  p(),

  htmlOutput("descriptionText"),  tags$head(tags$style("#descriptionText{color: red; font-size: 18px; font-style: bold;}")),
  #graph output
  htmlOutput("dataPlot"),
  #creates space between the graph and datatable
  htmlOutput("spacer"), tags$head(tags$style("#spacer{color: white; font-size: 45px; font-style: bold;}")),
  #data table output
  htmlOutput("fullData"),
  )
  
)


# the server function controls the backend of the app
server <- function(input, output, session) {
  
  #Populates the htmlOuptut("spacer) with white text to create a space 
  output$spacer <- renderText({
      "This is a spacer to try and keep my table from my graph"
    })

  #Function that is called by the map when the element dataframe is being used to populate the colors for the thresholds
  color_function <- function(element, lichen, currentData){
  
    #Vector pulls out the current lichen species and element selected by the user from the elemental database 
      vec = elemental_database %>% filter(sciname == input$lichen_selector) %>% select(element) %>% drop_na()%>% pull()
      
      #Takes the 90% quantile of the pervious vector to use as the threshold
      threshold = quantile(vec, 0.9)
    
    #it is difficult to use the input$element_selector call to index a database so it is easiest to use the select method
    element_data = fData() %>% select(input$element_selector) %>%pull()
    #the data above goes through the series of if else statements to assign a point color based on the given threshold
    elemental_thresholds <-as.factor(ifelse(element_data <= (threshold*.75), 'limegreen', ifelse(element_data > (threshold*.75) & element_data <= (threshold*.9), 'darkgreen',
                                            ifelse(element_data > (threshold*.9) & element_data <= (threshold*1.1), 'yellow', 
                                                   ifelse(element_data > (threshold*1.1) & element_data < (threshold*2), 'red', 
                                                         ifelse(element_data >= (threshold*2), 'magenta',"blue"))))))
    return(elemental_thresholds)
  }
  
  #Based on user selection the dataframe is selected
  small_sample_data <- reactive({
    if(input$data == "Lichen"){
      lichen_database %>%
          mutate("plot" = plot_use) 
    }else if(input$data == "Elemental"){
      elemental_database %>%
       mutate("plot" = plot_use) %>%
        mutate('nfs_reg' = reg_id)

    }else if(input$data == "Plot"){
      plot_database
    }
    
   })
  
  
#populates the national forest selector   
observe({
  updateSelectizeInput(session, 'national_forest_selector', choices = c("No Selection",sort(as.vector(unique(small_sample_data()$area)))), selected = "No Selection",server = TRUE)
})
      

#filters the wilderness selector basedo on user selection in the national forest selector    
  observeEvent(input$national_forest_selector, {
    if(!is.null(small_sample_data()) & length(input$national_forest_selector) != 0  & input$national_forest_selector != "No Selection"){
      wildernesses = small_sample_data() %>% filter(small_sample_data()$area == input$national_forest_selector)%>% select(wilderns) %>% unique() %>% as.vector()
      updateSelectizeInput(session, 'wilderness', choices = c("No Selection",wildernesses),server = TRUE)
      
    }else{
      wildernesses = small_sample_data() %>% select(wilderns) %>% unique() %>% as.vector()
      updateSelectizeInput(session, 'wilderness', choices = c("No Selection",wildernesses),server = TRUE)
      
      }

    if(input$data == "Elemental" & (input$national_forest_selector != "No Selection" | input$wilderness != "No Selection" )){
      lichen = small_sample_data() %>% filter(small_sample_data()$area == input$national_forest_selector)%>% select(sciname) %>% unique() %>% as.vector()
      updateSelectizeInput(session, 'lichen_selector', choices = c("No Selection",lichen),server = TRUE)
    }else if(input$data == "Elemental" & input$national_forest_selector == "No Selection" & input$wilderness == "No Selection"){
      lichen = small_sample_data() %>% select(sciname) %>% unique() %>% as.vector()
      updateSelectizeInput(session, 'lichen_selector', choices = c("No Selection",lichen),server = TRUE)
    }

  })
  
  #filters the current round choices available to the user based on wilderness and national forest selections
  round_choices <- reactive({
    if(input$data == "Elemental"){
      if(!is.null(input$lichen_selector)){
        if(input$lichen_selector != "No Selection" & input$national_forest_selector == "No Selection" & input$wilderness == "No Selection"){
          updateCheckboxGroupInput(session, "roundYear", choices = as.vector(small_sample_data() %>% filter(small_sample_data()$sciname == input$lichen_selector) %>%select(roundno)%>%pull()%>%sort()%>%unique()), selected = as.vector(small_sample_data()%>%filter(small_sample_data()$sciname == input$lichen_selector) %>%select(roundno)%>%pull()%>%sort()%>%unique()))
          as.vector(small_sample_data() %>% filter(small_sample_data()$sciname == input$lichen_selector) %>%select(roundno)%>%pull()%>%sort()%>%unique())
          
        }else if(input$wilderness != "No Selection"){
          updateCheckboxGroupInput(session, "roundYear", choices = as.vector(small_sample_data() %>% filter(small_sample_data()$wilderns == input$wilderness) %>%select(roundno)%>%pull()%>%sort()%>%unique()), selected = as.vector(small_sample_data()%>%filter(small_sample_data()$wilderns == input$wilderness) %>%select(roundno)%>%pull()%>%sort()%>%unique()))
          as.vector(small_sample_data() %>% filter(small_sample_data()$area == input$national_forest_selector) %>%select(roundno)%>%pull()%>%sort()%>%unique())
          
        }else{
          updateCheckboxGroupInput(session, "roundYear", choices = as.vector(small_sample_data() %>% filter(small_sample_data()$area == input$national_forest_selector) %>%select(roundno)%>%pull()%>%sort()%>%unique()), selected = as.vector(small_sample_data()%>%filter(small_sample_data()$area == input$national_forest_selector) %>%select(roundno)%>%pull()%>%sort()%>%unique()))
          as.vector(small_sample_data() %>% filter(small_sample_data()$area == input$national_forest_selector) %>%select(roundno)%>%pull()%>%sort()%>%unique())
          
        }
      }else{
        updateCheckboxGroupInput(session, "roundYear", choices = as.vector(small_sample_data() %>% filter(small_sample_data()$area == input$national_forest_selector) %>%select(roundno)%>%pull()%>%sort()%>%unique()), selected = as.vector(small_sample_data()%>%filter(small_sample_data()$area == input$national_forest_selector) %>%select(roundno)%>%pull()%>%sort()%>%unique()))
        as.vector(small_sample_data() %>% filter(small_sample_data()$area == input$national_forest_selector) %>%select(roundno)%>%pull()%>%sort()%>%unique())
        
      }
    }else if(input$wilderness != "No Selection"){
      updateCheckboxGroupInput(session, "roundYear", choices = as.vector(small_sample_data() %>% filter(small_sample_data()$wilderns == input$wilderness) %>%select(roundno)%>%pull()%>%sort()%>%unique()), selected = as.vector(small_sample_data()%>%filter(small_sample_data()$wilderns == input$wilderness) %>%select(roundno)%>%pull()%>%sort()%>%unique()))
      as.vector(small_sample_data() %>% filter(small_sample_data()$area == input$national_forest_selector) %>%select(roundno)%>%pull()%>%sort()%>%unique())
      
    }else{
      updateCheckboxGroupInput(session, "roundYear", choices = as.vector(small_sample_data() %>% filter(small_sample_data()$area == input$national_forest_selector) %>%select(roundno)%>%pull()%>%sort()%>%unique()), selected = as.vector(small_sample_data()%>%filter(small_sample_data()$area == input$national_forest_selector) %>%select(roundno)%>%pull()%>%sort()%>%unique()))
      as.vector(small_sample_data() %>% filter(small_sample_data()$area == input$national_forest_selector) %>%select(roundno)%>%pull()%>%sort()%>%unique())
      
    }


  })

  #filters and updates the data used for the map based on user selection

  fData <- reactive({
    
    #filters the data based on round year
    if(is.null(input$roundYear)){
      data_to_send = small_sample_data() %>% filter(!small_sample_data()$roundno %in% round_choices())
      data_to_send
    }else{
      exclude = setdiff(round_choices(), input$roundYear)
      if(length(exclude) != 0){
        data_to_send = small_sample_data()  %>% filter(!small_sample_data() $roundno %in% exclude)
        data_to_send
      }else{
        data_to_send =small_sample_data()  %>% filter(small_sample_data() $roundno %in% input$roundYear)
        data_to_send
      }
    }
    
  #if the dataframe is the elemental data it is filtered by selected lichen species
    if(input$data == "Elemental"){
    if(!is.null(input$lichen_selector)){
      if(input$lichen_selector != "No Selection"){
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
          data_to_send = data_to_send %>% filter(data_to_send$wilderns == input$wilderness) 
          data_to_send
        }else{
          data_to_send = data_to_send %>% filter(data_to_send$area == input$national_forest_selector) 
          
        }
      }
    }else{
      if(input$wilderness != "No Selection"){
        data_to_send = data_to_send %>% filter(data_to_send$wilderns == input$wilderness) 
        data_to_send
      }else{
        data_to_send = data_to_send %>% filter(data_to_send$area == input$national_forest_selector) 
        data_to_send
      }
    }
      if(!is.null(input$element_selector)){
        if(input$element_selector != "No Selection"){
          data_to_send %>% drop_na(input$element_selector)
        }else{
          data_to_send
        }
      }else{
        data_to_send
      }
      }else{
      if(input$wilderness != "No Selection"){
        data_to_send = data_to_send %>% filter(data_to_send$wilderns == input$wilderness) 
        data_to_send
      }else{
        data_to_send = data_to_send %>% filter(data_to_send$area == input$national_forest_selector) 
        data_to_send
      }
    }
      })
  
 #returns the current species selected by the user 
  current_species <- reactive({
    if(input$data == "Elemental"){
      if(input$wilderness != "No Selection"){
        small_sample_data() %>% filter(small_sample_data()$wilderns == input$wilderness) %>% select(sciname) %>% pull() %>% unique() %>% as.vector() %>% sort()
      }else{
        small_sample_data() %>% filter(small_sample_data()$area == input$national_forest_selector) %>% select(sciname) %>% pull() %>% unique() %>% as.vector() %>% sort()
      }
    }
  })
  
  #reset the single point selection to allow the user to return to the main graph
  observeEvent(input$resetSelection,{
    values$current_plot = NULL
    if(input$data == "Elemental"){
      output$dataPlot <- renderUI({
        renderPlotly({
          element_plot_reactive()
        })
        
      })
      
    }else if(input$data == "Lichen"){
      output$dataPlot <-renderUI({
        
        current_year_round <- currentPlotData() %>% select(roundno) %>% pull()%>%unique()%>%as.vector()
        lichen_lists = c()
        
        for(round in current_year_round){
          lichen_lists = c(lichen_lists, currentPlotData() %>% filter(roundno == round)%>%pull(sci_22chklst)%>%unique()%>%as.vector())
        }
        lichen_lists_ordered = sort(as.vector(unique(lichen_lists)))
        HTML(paste('', lichen_lists_ordered, sep='<br/>'))
      })
    }else if(input$data == "Plot"){
      output$dataPlot <- renderUI({
        renderPlotly({
          airscore_plot_reactive()
        })
        
      })
    }

  })
  
  #this is the format the data needs to be in to allow the map, graph, and data table to commincate and filter
  filteredData <- SharedData$new(fData)
  
  #this gives the map in the UI output its data
  map_reactive <- reactive({
    
    #how the dots on the map are color coded
    fillColor = "purple"
    if(input$data == "Elemental"){
      if(length(input$plot_type) != 0 & length(input$element_selector) != 0 & length(input$lichen_selector) != 0){
      if(input$element_selector == "No Selection"){
        fillColor = "purple"
      }else{
        fillColor = color_function(input$element_selector, input$lichen_selector, filteredData$data())
        
        #assigns the legend to the map
        leafletProxy("mymap", data = filteredData)%>%
          addLegend('bottomright', colors = c("limegreen", 'darkgreen',"yellow", "red", "magenta", "blue") , labels=c("<75% of threshold", "Between 75% and 90% of threshold", "Between 90% and 110% of threshold","Between 110% and 200% of threshold", ">200% of threshold", "NA") ,
                    title = 'Thresholds',
                    opacity = 1)
      }
      }
    }else if(input$data == "Plot"){
      if(length(input$plot_type) != 0 & length(input$airscore_value) != 0 & input$national_forest_selector != "No Selection"){
        #these assign the max value for the plot data color gradient
        if(input$airscore_value == 'cmaq_n_3yroll'){
          current_max = ceiling(max(plot_database$cmaq_n_3yroll, na.rm = T))
          legend_value = "Value"
        }else if(input$airscore_value == 'n_airscore_clim_adj'){
          current_max = plyr::round_any(max(plot_database$n_airscore_clim_adj, na.rm = T), 10, f=ceiling)
          legend_value = "Value"
        }else if(input$airscore_value == 'spprich_oligo'){
          current_max = ceiling(max(plot_database$spprich_oligo, na.rm = T))
          legend_value = "Count"
        }else if(input$airscore_value == 'cmaq_s_3yroll'){
          current_max = ceiling(max(plot_database$cmaq_s_3yroll, na.rm = T))
          legend_value = "Value"
        }else if(input$airscore_value == 's_airscore_clim_adj'){
          current_max = ceiling(max(plot_database$s_airscore_clim_adj, na.rm = T))
          legend_value = "Value"
        }else if(input$airscore_value == 'spprich_total'){
          current_max = ceiling(max(plot_database$spprich_total, na.rm = T))
          legend_value = "Count"
        }else if(input$airscore_value == 's_airscore'){
          current_max = ceiling(max(plot_database$s_airscore, na.rm = T))
          legend_value = "Value"
        }else if(input$airscore_value == 'n_airscore'){
          current_max = ceiling(max(plot_database$n_airscore, na.rm = T))
          legend_value = "Value"
        }else if(input$airscore_value == 'spprich_epimac'){
          current_max = ceiling(max(plot_database$spprich_epimac, na.rm = T))
          legend_value = "Count"
        }else if(input$airscore_value == 'spprich_forage'){
          current_max = ceiling(max(plot_database$spprich_forage, na.rm = T))
          legend_value = "Count"
        }else if(input$airscore_value == 'spprich_cyano'){
          current_max = ceiling(max(plot_database$spprich_cyano, na.rm = T))
          legend_value = "Count"
        }else if(input$airscore_value == 'spprich_s_sens'){
          current_max = ceiling(max(plot_database$spprich_s_sens, na.rm = T))
          legend_value = "Count"
        }
        
        pal <- colorNumeric(
          palette = "OrRd",
          domain = 0:current_max)
        
        fillColor = ~pal(plot_database %>% select(input$airscore_value)%>%drop_na()%>%pull())
        
        leafletProxy("mymap", data = filteredData)%>%
          addLegend("bottomright", pal = pal, values = 0:current_max,
                    title = legend_value,
                    opacity = 1, group = "Show Legend"
          )        
        }
    }else{
      fillColor = "purple"
    }
    

    #this is the actual leaflet map
    leaflet(data = filteredData) %>%
      addProviderTiles(providers$Stamen.TonerLite, options = providerTileOptions(noWrap = TRUE), group = "Basic Map") %>%
      addProviderTiles(providers$Esri.WorldImagery, options = providerTileOptions(noWrap = TRUE), group = "Topographical")%>%
      addProviderTiles(providers$Esri.WorldTopoMap, options = providerTileOptions(noWrap = TRUE), group = "Lined Topographical")%>%
      addCircleMarkers(~longuseNAD83, ~latuseNAD83, radius = 5,stroke=FALSE,fillOpacity = 1, color = fillColor, layerId = ~row_id, popup = (paste("Year Sampled: ",fData()$year ,"<br>","Lichen Species: ", fData()$sciname ,"<br>", "National Forest: ",fData()$area, "<br>", "Wilderness: ",fData()$wilderns, "<br>","State: ",fData()$state, "<br>", "County: ",fData()$county, "<br>","Plot: ",fData()$plot,"<br>","Longitude: ",fData()$longuseNAD83,'<br>','Latitude: ', "<br>",fData()$latuseNAD83,"<br>","Megadbid: ", fData()$megadbid))) %>% #, color = ~circleMarkerOutline(ba_ppm_factor), stroke = T, weight = 0.4, fillColor = ~ba_ppm_color(ba_ppm_factor), fillOpacity = ~factop(ba_ppm_factor), group = "Barium")%>%
      addLayersControl(
      baseGroups = c("Lined Topographical", "Topographical","Basic Map"),
      overlayGroups = c("Show Legend"),
      options = layersControlOptions(collapsed = FALSE) )
   })
  
  #removes the legend from the map according to user input
  observeEvent(input$mymap_groups,{
    if(input$data == "Elemental"){
      if(!"Show Legend" %in% input$mymap_groups){
        leafletProxy("mymap") %>% clearControls()
      }else{
        leafletProxy("mymap", data = filteredData)%>%
          addLegend('bottomright', colors = c("limegreen", 'darkgreen',"yellow", "red", "magenta", "blue") , labels=c("<75% of threshold", "Between 75% and 90% of threshold", "Between 90% and 110% of threshold","Between 110% and 200% of threshold", ">200% of threshold", "NA") ,
                    title = 'Thresholds',
                    opacity = 1)
      }
      }

  })
  
  #removes or adds the dataframe specific selection boxes
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
      output$descriptionText <-renderUI({
        return(NULL)
      })
    }else if(input$data == "Elemental"){
      
      if(input$wilderness == "No Selection" & input$national_forest_selector == "No Selection"){
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
        selectInput("plot_type", "Output Type", choices = c("Scatter Plot"="scatter", "Box Plot" = "box", "Histogram"="histogram", "Box Plot (whole selection area)" = 'whole box plot'))
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
        selectInput("airscore_value", "Airscore Value", choices = c("Nitrogen Airscore (Climate Adjusted)"="n_airscore_clim_adj", "Nitrogen Airscore"="n_airscore","Sulfur Airscore (Climate Adjusted)" = "s_airscore_clim_adj", "Sulfur Airscore" = "s_airscore","Nitrogen Deposition" = 'cmaq_n_3yroll', "Sulfur Deposition" = 'cmaq_s_3yroll', "Oligotroph Species Richness" = "spprich_oligo", 'Sensitive Species Richness' = 'spprich_s_sens', "Total Species Richness" = 'spprich_total', 'Epiphytic Macro Lichen Richness'='spprich_epimac', 'Forage Lichen Richness'='spprich_forage','Cyano Lichen Richness'='spprich_cyano'))
      )
      output$airscore_plot_ui <-renderUI(
        selectInput("plot_type", "Output Type", choices = c("Scatter Plot"="scatter", "Box Plot" = "box", "Histogram"="histogram", "Box Plot (whole selection area)" = 'whole box plot'))
      )
    }
    if(input$data != "Lichen"){
      output$lichen_list_ui <- renderUI({
        return(NULL)
      })
    }else if(input$data == "Lichen"){
      output$lichen_list_ui <-renderUI(
        selectInput("lichen_type", "Select Lichen Type", choices = c("All Lichen"))
      )
    }
  })
     
  #outputs the leaflet map
  output$mymap <- renderLeaflet({
    map_reactive()
  })
  
  #returns the most recent user selection to the graphin tools
  currentPlotData <- reactive({
    if(is.null(filteredData$selection())){
      filteredData$data()
    }else{
      filteredData$data()[filteredData$selection(),]
    }
  })
  
  #is called by the graph output and returns the user selected graph for the elemental data
  element_plot_reactive <- reactive({
    
    if(input$data == "Elemental"){
    
    #almost identical to the color function above, allows the scatter plot points to be colored the same as the map points
    element_data = currentPlotData() %>% select(input$element_selector) %>% drop_na() %>% pull()
    
    vec = elemental_database %>% filter(sciname == input$lichen_selector) %>% select(input$element_selector) %>% drop_na() %>% pull()
    
    threshold = quantile(vec, 0.9)
    explanation = paste("This is the 90% quantile of the National Data Set for", input$lichen_selector, ".")
    
    output$descriptionText <- renderUI({
      renderText({
        paste("The current threshold is: ", round(threshold, 2),' ppm.',explanation)
        
      })
    })

    

    data_for_plot = currentPlotData() %>% mutate(Color = ifelse(element_data <= (threshold*.75), 'green', ifelse(element_data > (threshold*.75) & element_data <= (threshold*.9), 'darkgreen',
                                                                                                                 ifelse(element_data > (threshold*.9) & element_data <= (threshold*1.1), 'yellow', 
                                                                                                                       ifelse(element_data > (threshold*1.1) & element_data < (threshold*2), 'red', 
                                                                                                                               ifelse(element_data >= (threshold*2), 'magenta',"blue"))))))

    #These go through each of the available graphs and returns the one the user selected
    if(nrow(currentPlotData()) != 0){
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
      first_plot <- ggplot(currentPlotData(), aes(x = .data[[input$element_selector]]))+
        geom_histogram(aes(y = ..density..))+
        facet_wrap(~roundno, nrow = length(input$roundYear), scales = "free")+
        theme_bw()+
        theme(axis.text.x = element_text(angle = 90, size = 10), axis.text.y = element_text(size = 10))+
        labs(x = "Survey Plot", title = paste("Histogram of",input$element_selector ,"Concentration"))
      #This call turns it into a plotly object rather than ggplot so it works with crosstalk
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
    }
}
  })
  
  #This creates the graphs for the plot dataframe selector 
  airscore_plot_reactive <- reactive({
    if(input$plot_type == "box"){
      first_plot <- ggplot(currentPlotData(), aes(y = .data[[input$airscore_value]], x=plot))+
        geom_boxplot()+
        #geom_jitter(color="black", size=0.4, alpha=0.9) +
        facet_wrap(~roundno, nrow = length(input$roundYear), scales = "free")+
        theme_bw()+
        theme(axis.text.x = element_text(angle = 90, size = 10), axis.text.y = element_text(size = 10))+
        labs(x = "Survey Plot")
      ggplotly(first_plot,height = 500, width = 1500)
      
    }else if(input$plot_type == "scatter"){
      first_plot <- ggplot(subset(currentPlotData(),!is.na(input$airscore_value)), aes(y = .data[[input$airscore_value]], x=plot))+
        geom_jitter(width = 0.15)+
        facet_wrap(~roundno, nrow = length(input$roundYear), scales = "free")+
        theme_bw()+
        theme(axis.text.x = element_text(angle = 90, size = 10), axis.text.y = element_text(size = 10))+
        labs(x = "Survey Plot", title = paste("Scatter Plot of", input$airscore_value))
      ggplotly(first_plot,height = 500, width = 1500)%>% add_trace(hoverinfo = 'plot')
    }else if(input$plot_type == "histogram"){
      first_plot <- ggplot(currentPlotData(), aes(x = .data[[input$airscore_value]]))+
        geom_histogram()+
        facet_wrap(~roundno, nrow = length(input$roundYear), scales = "free")+
        theme_bw()+
        theme(axis.text.x = element_text(angle = 90, size = 10), axis.text.y = element_text(size = 10))+
        labs(x = "Survey Plot")
      ggplotly(first_plot,height = 500, width = 1500)
    }else if(input$plot_type == "whole box plot"){
      if(input$national_forest_selector != "No Selection" & input$wilderness == "No Selection"){
        first_plot <- ggplot(currentPlotData(), aes(y = .data[[input$airscore_value]], x=area))+
          geom_boxplot()+
          facet_wrap(~roundno, ncol = length(input$roundYear), scales = "free")+
          theme_bw()+
          theme(axis.text.x = element_text(size = 10), axis.text.y = element_text(size = 10))+
          labs(x = "Survey Plot")
        ggplotly(first_plot,height = 500, width = 1500)
      }else{
        first_plot <- ggplot(currentPlotData(), aes(y = .data[[input$airscore_value]], x=wilderns))+
          geom_boxplot()+
          facet_wrap(~roundno, ncol = length(input$roundYear), scales = "free")+
          theme_bw()+
          theme(axis.text.x = element_text(size = 10), axis.text.y = element_text(size = 10))+
          labs(x = "Survey Plot")
        ggplotly(first_plot,height = 500, width = 1500)
      }
    }
  })
  
  #This outputs the plot and data table based on user selection, populates the ui above
  observe({
      if(input$data == "Elemental"){
        if(length(input$plot_type) != 0 & length(input$element_selector) != 0 & length(input$lichen_selector) != 0){
          
          if(input$element_selector == "No Selection"){
            output$dataPlot <- renderUI({
              renderText({
                "Select an element to see a plot of the selection area"
                
              })
            })
          }else{
            if(nrow(currentPlotData()) != 0){
              output$dataPlot <-renderUI({
                renderPlotly({
                  element_plot_reactive()
                  
                })
              })
            }else{
              output$dataPlot <- renderUI({
                renderText({
                  "Your current selection does not have any observations, please revise your selection to see a plot."
                  
                })
              })
            }

            
          }
          if(input$element_selector != "No Selection"){
            
            if(input$wantDataTable){
              if(!is.null(values$current_plot)){
                output$fullData <- renderUI({ DT::renderDataTable({
                  toDataTable <- currentPlotData()%>% filter(plotno == values$current_plot) %>%select(sciname, input$element_selector, area, wilderns, county, state, plotno, year)
                  datatable(toDataTable)
                }, server = FALSE)
                })
              }else{
                output$fullData <- renderUI({ DT::renderDataTable({
                  toDataTable <- currentPlotData()%>% select(sciname, input$element_selector, area, wilderns, county, state, plotno, year)
                  datatable(toDataTable)
                }, server = FALSE)
                })
              }

            }else{
              output$fullData <- renderUI({
                return(NULL)
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
        if(nrow(currentPlotData()) != 0){
        output$dataPlot <-renderUI({
          renderPlotly({
            airscore_plot_reactive()
            
          })
        })
        }else{
          output$dataPlot <- renderUI({
            renderText({
              "Your current selection does not have any observations, please revise your selection to see a plot."
              
            })
          })
        }
      }
      
      if(input$wantDataTable){
        if(!is.null(values$current_plot)){
          output$fullData <- renderUI({ DT::renderDataTable({
            toDataTable <- currentPlotData()%>% filter(plot_use == values$current_plot) %>% select(megadbid, plot_use, year, date, state, county, area, wilderns, locale, latuseNAD83, longuseNAD83, eluseft, ecoreg1, ecoreg3, ecoreg_4, habitat, fia_hab, ubc_mat, ubc_map, ubc_cmd, cmaq_s_3yroll, n_lich_kghay, n_airscore_clim_adj, spprich_eut, spprich_oligo, cmaq_s_3yroll, s_airscore_clim_adj, spprich_s_sens, spprich_s_tol, spprich_total, spprich_epimac, spprich_forage, spprich_cyano)
            datatable(toDataTable)
          }, server = FALSE)
          })
        }else{
          output$fullData <- renderUI({ DT::renderDataTable({
            toDataTable <- currentPlotData()%>% select(megadbid, plot_use, year, date, state, county, area, wilderns, locale, latuseNAD83, longuseNAD83, eluseft, ecoreg1, ecoreg3, ecoreg_4, habitat, fia_hab, ubc_mat, ubc_map, ubc_cmd, cmaq_s_3yroll, n_lich_kghay, n_airscore_clim_adj, n_airscore,spprich_eut, spprich_oligo, cmaq_s_3yroll, s_airscore_clim_adj, s_airscore,spprich_s_sens, spprich_s_tol, spprich_total, spprich_epimac, spprich_forage, spprich_cyano)
            datatable(toDataTable)
          }, server = FALSE)
          })
        }

      }else{
        output$fullData <- renderUI({
          return(NULL)
        })
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
          if(!is.null(values$current_plot)){
            output$fullData <- renderUI({ DT::renderDataTable({
              toDataTable <- currentPlotData()%>% filter(plot_use == values$current_plot)%>% select(megadbid, year, plot_use, state, county, substrat, fia_abun, chemtest, matchem, lichcoll, collno, detmd,ddate, herb, accessno, proj_code, growthform, sci_22chklst, auth_22, commonname, family, fxlgp, n_class, s_class, n_critload, s_critload, consrv_stat)
              datatable(toDataTable)
            }, server = FALSE)
            })
          }else{
            output$fullData <- renderUI({ DT::renderDataTable({
              toDataTable <- currentPlotData()%>% select(megadbid, year, plot_use, state, county, substrat, fia_abun, chemtest, matchem, lichcoll, collno, detmd,ddate, herb, accessno, proj_code, growthform, sci_22chklst, auth_22, commonname, family, fxlgp, n_class, s_class, n_critload, s_critload, consrv_stat)
              datatable(toDataTable)
            }, server = FALSE)
            })
          }

        }else{
          output$fullData <- renderUI({
            return(NULL)
          })
        }
      }
    }
    })
  
  #This value allows users to select a specific plot and for the program to know where they selected- its reassigned in another function
  values <- reactiveValues(current_megadbid = NULL, current_plot = NULL)
  
  #This function outputs a single plot's graph when a user selected in the elemental mapper 
  single_element_plot_reactive <- reactive({
    
    
    element_data = currentPlotData()  %>% filter(plotno == values$current_plot) %>% select(input$element_selector) %>% drop_na() %>% pull()
    
    vec = elemental_database %>% filter(sciname == input$lichen_selector) %>% select(input$element_selector) %>% drop_na() %>% pull()
    
    threshold = quantile(vec, 0.9)
    
    data_for_plot = fData() %>% filter(plotno == values$current_plot) %>% mutate(Color = ifelse(element_data <= (threshold*.75), 'green', ifelse(element_data > (threshold*.75) & element_data <= (threshold*.9), 'darkgreen', ifelse(element_data > (threshold*.9) & element_data <= (threshold*1.1), 'yellow', 
                                                                                                                                                                                                      ifelse(element_data > (threshold*1.1) & element_data < (threshold*2), 'red', 
                                                                                                                                                                                                             ifelse(element_data >= (threshold*2), 'magenta',"blue"))))))
    
    
    
                                                                                                                 
    if(input$plot_type == "box"){
      first_plot <- ggplot(data_for_plot, aes(y = .data[[input$element_selector]], x=plotno))+
        geom_boxplot()+
        facet_wrap(~roundno, nrow = length(input$roundYear), scales = "free")+
        theme_bw()+
        theme(axis.text.x = element_text(angle = 90, size = 10), axis.text.y = element_text(size = 10))+
        labs(x = "Survey Plot", title = paste("Box Plot of",input$element_selector ,"Concentration"))
      ggplotly(first_plot,height = 500, width = 500)
      
    }else if(input$plot_type == "scatter"){
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
  
  #This function outputs a single plot's graph when a user selected in the plot mapper 
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
  

  #This function registers a user's click on a plot point and returns the appropriate plot
  observeEvent(input$mymap_marker_click, {
    click<-input$mymap_marker_click
    if(is.null(click)){
      return()
    }else{

      #If a user selects a plot point in the lichen mapper it returns the lichen found at that specific point
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

#This allows users to download their current data selection
  output$downloadData <- downloadHandler(
    filename = function() {
      # Use the selected dataset as the suggested file name
      paste0( "dataSelection.csv")
    },
    content = function(file) {
      # Write the dataset to the `file` that will be downloaded
      write.csv(fData(), file)
    }
  )
  
}

shinyApp(ui, server)
