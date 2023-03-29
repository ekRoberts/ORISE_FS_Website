library(shiny)
library(tidyr)
library(tidyverse)
library(ggplot2)



plot_database <- read.csv("~/Desktop/PWS465/shinyapp2/MegaDbPLOT_2022.10.06v2 minus FIA locale.csv", stringsAsFactors = F)
lichen_database <- read.csv("~/Desktop/PWS465/shinyapp2/MegaDbLICHEN_2021.06.03V3.csv", stringsAsFactors = F) 
elemental_database <- read.csv("~/Desktop/PWS465/shinyapp2/MegaDbELEMENTAL_2021.05.30.csv", stringsAsFactors = F)

wilderness_megadbid <- plot_database %>% select(megadbid, wilderns, area)


lichen_database <- left_join(lichen_database, wilderness_megadbid)

ui <- fluidPage(
  titlePanel("Elemental USFS Data"),
  sidebarLayout(
    
    sidebarPanel(
      radioButtons("data", #name of input
                   label = "Data:", #label displayed in ui
                   choices = c("Lichen", "Elemental", "Plot"),
                   # calls unique values from the State column in the previously created table
      ) ,
      htmlOutput("region_selector"),
      htmlOutput("national_forest_selector"),
      htmlOutput("wilderness_selector"),
      htmlOutput("variable1_selector")

    ),
    mainPanel(
      h3(textOutput("caption")),
      plotOutput("elementalPlot")
    )
  )
  #downloadButton('downloadPlot'),
  #downloadButton('downloadData')
)

server <- function(input, output){
  
#   output$data_selector = renderUI({ #creates State select box object called in ui
# #default choice (not required)
#   })
  
  data_available <- reactive({
      if(input$data == "Lichen"){
        data_active = lichen_database %>% 
          rename("reg_id" = nfs_reg)
      }else if(input$data == "Elemental"){
        data_active = read.csv("~/Desktop/PWS465/shinyapp2/MegaDbELEMENTAL_2021.05.30.csv", stringsAsFactors = F)
      }else if(input$data == "Plot"){
        data_active = read.csv("~/Desktop/PWS465/shinyapp2/MegaDbPLOT_2022.10.06v2 minus FIA locale.csv", stringsAsFactors = F)%>% 
          rename("reg_id" = nfs_reg)
      } 
  })
  
  output$region_selector = renderUI({ #creates State select box object called in ui
    selectInput(inputId = "region", #name of input
                label = "Region:", #label displayed in ui
                choices = as.character(data_available() %>% pull(reg_id)%>%unique()%>%sort()),
                # calls unique values from the State column in the previously created table
                ) #default choice (not required)
  })
  output$national_forest_selector = renderUI({#creates County select box object called in ui

    forest_data = data_available() %>% filter(reg_id == as.integer(input$region))
    #creates a reactive list of available counties based on the State selection made

    selectInput(inputId = "national_forest", #name of input
                label = "National Forest:", #label displayed in ui
                choices = unique(forest_data$area), #calls list of available counties
                #selected = unique(data_available)[1]
                )
  })
  output$wilderness_selector = renderUI({#creates County select box object called in ui
    wilderness_data = data_available() %>% filter(area == input$national_forest)
    #creates a reactive list of available counties based on the State selection made
    
    selectInput(inputId = "wilderness", #name of input
                label = "Wilderness:", #label displayed in ui
                choices = unique(wilderness_data$wilderns), #calls list of available counties
    )
  })
  
  output$variable1_selector = renderUI({#creates County select box object called in ui
      variable_data = data_available() %>% filter(wilderns == input$wilderness)
    
    #creates a reactive list of available counties based on the State selection made
    
    selectInput(inputId = "variable1", #name of input
                label = "Select an Output:", #label displayed in ui
                choices = c("Histogram", "List of Wilderness species", "List of plots", "Elemental/Year graph"), #calls list of available counties
                #selected = unique(data_available)[1]
    )
  })
  
  output$elementalPlot = renderPlot({
    variable_data = data_available() %>% filter(wilderns == input$wilderness)
    
    if(input$variable1 == "Histogram"){
      ggplot(variable_data, aes(x=sci_22chklst))+
        geom_bar()+
        theme(axis.text.x = element_text(angle = 90))+
        labs(x = "Lichen Species", title = "Histogram of Lichen Species within Selected Wilderness")
      
    }else if(input$variable1 == "List of Wilderness species"){
      output$table <- renderTable(variable_data)
    }else if(input$variable1 == "List of plots"){
      
    }else if(input$variable1 == "Elemental/Year graph"){
      
    }
    
    ggplot(variable_data, aes_string(x=input$variable1))+
      geom_bar()+
      theme(axis.text.x = element_text(angle = 90))
  })
    
  #output$downloadPlot <- downloadHandler(
  #  filename = 'plot.png',
  #  content = function(file) {
  #      ggsave(file, plot = output$elementalPlot, device = "png")
  #  }
  #)
   #output$downloadData <- downloadHandler(
   # filename = 'dataset.csv',
   # content = function(file) {
   #   write.csv(variable_data, file)
   # }
  #)

  }

shinyApp(ui, server)
