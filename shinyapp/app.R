library(shiny)
library(leaflet)
library(tidyverse)

r_colors <- rgb(t(col2rgb(colors()) / 255))
names(r_colors) <- colors()

ui <- fluidPage(
  leafletOutput("mymap"),
  p(),
  actionButton("recalc", "New points")
)

data_points <- read.csv("~/Desktop/PWS465/shinyapp/Long_Lat_Point_Data.csv") %>%
  select(c("latusedd", "longusedd"))%>%
  na.omit()
  
data_points$LatandLong <- str_c(data_points$longusedd, ",", data_points$latusedd)  

unique_longandlat <- data_points%>%
  pull(LatandLong) %>% unique() %>% data.frame() 

unique_longandlat[c("Long", "Lat")] <- str_split_fixed(unique_longandlat$., ",", 2)

unique_longandlat$Lat<- as.numeric(unique_longandlat$Lat)
unique_longandlat$Long <- as.numeric(unique_longandlat$Long)

server <- function(input, output, session) {
  
  points <- eventReactive(input$recalc, {
    unique_longandlat[2:3]
  }, ignoreNULL = FALSE)
   
  output$mymap <- renderLeaflet({
    leaflet() %>%
      addProviderTiles(providers$Stamen.TonerLite,
                       options = providerTileOptions(noWrap = TRUE)
      ) %>%
      addMarkers(data = points())
  })
}

shinyApp(ui, server)
