library(shiny)
library(tidyr)
library(ggplot2)

ui <- fluidPage(
  titlePanel("Elemental USF Data"),
  sidebarLayout(
    
    sidebarPanel(
      selectInput("variable1", "Variable1:", c("Area" = "area", "Year" = "year", "Moist" = "moist")), 
      selectInput("variable2", "Variable2:", c("Ba_ppm" = "ba_ppm", "Al_ppm" = "al_ppm", "Co_ppm" = "co_ppm")),
      selectInput("graphType", "Type of Graph", c("Box Plot" = "boxplot", "Histogram" = "geom_histogram") ),
      
      #checkboxInput("outliers", "Show outliers", TRUE)
    ),
    mainPanel(
      h3(textOutput("caption")),
      plotOutput("elementalPlot")
    )
  )
)

Data <- read.csv("~/Desktop/PWS465/shinyapp2/MegaDbELEMENTAL_2021.05.30.csv", stringsAsFactors = F)

Data <- Data[Data$area == '' | Data$year == '' | Data$moist == ""| Data$ba_ppm == "",]

Data$moist <- factor(Data$moist)
Data$area <- factor(Data$area)
Data$ba_ppm <- as.integer(Data$ba_ppm)
Data$al_ppm <- as.integer(Data$al_ppm)
Data$co_ppm <- as.integer(Data$co_ppm)

class(Data$year)
class(Data$moist)
class(Data$area)
class(Data$ba_ppm)

server <- function(input, output){
  formulaText <- reactive({
    paste(input$variable2, "~",input$variable1)
  })
  
  output$caption <- renderText({
    formulaText()
  })
  
  output$elementalPlot <- renderPlot({
  if(input$graphType == "boxplot"){

      boxplot(as.formula(formulaText()),
              data = Data,
              #outline = input$outliers,
              col = "#007bc2", pch = 19)

  }else if(input$graphType == "geom_histogram"){
      ggplot(data = Data, aes(x = .data[[input$variable1]], y = .data[[input$variable2]])) + 
        geom_histogram(stat = "identity")
  }
  })
  }

shinyApp(ui, server)
