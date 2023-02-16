library(shiny)
library(leaflet)
library(tidyverse)
library(leaflet.extras2)
library(shinyscreenshot)

r_colors <- rgb(t(col2rgb(colors()) / 255))
names(r_colors) <- colors()

ui <- fluidPage(
  leafletOutput("mymap"),
  p(),
  sliderInput("range", "Year", min(small_sample_data$Year), max(small_sample_data$Year), value = range(small_sample_data$Year), step = 1, sep = ""),
)

fulL_dataset <- read.csv("~/Desktop/PWS465/shinyapp/Long_Lat_Point_Data.csv")

data_points <- read.csv("~/Desktop/PWS465/shinyapp/Long_Lat_Point_Data.csv") %>%
  select(c("latusedd", "longusedd", "year", "megadbid"))%>%
  na.omit()
  
data_points$LatandLong <- str_c(data_points$longusedd, ",", data_points$latusedd, ",", data_points$year, ",", data_points$megadbid)  

unique_longandlat <- data_points%>%
  pull(LatandLong) %>% unique() %>% data.frame()

unique_longandlat[c("Long", "Lat", "Year", "megadbid")] <- str_split_fixed(unique_longandlat$., ",", 4)

years <- unique_longandlat %>% pull("Year") %>% unique()

unique_longandlat$Lat<- as.numeric(unique_longandlat$Lat)
unique_longandlat$Long <- as.numeric(unique_longandlat$Long)
unique_longandlat$Year <- as.numeric(unique_longandlat$Year)

elemental_data <- read.csv("~/Desktop/PWS465/shinyapp2/MegaDbELEMENTAL_2021.05.30.csv", stringsAsFactors = F) %>%
  select(c("ba_ppm", "al_ppm", "co_ppm", "megadbid"))
  
elemental_data$ba_ppm <- as.integer(elemental_data$ba_ppm)
elemental_data$al_ppm <- as.integer(elemental_data$al_ppm)
elemental_data$co_ppm <- as.integer(elemental_data$co_ppm)
elemental_data$megadbid <- as.character(elemental_data$megadbid)

plot_elemental_data <- left_join(unique_longandlat, elemental_data, by = "megadbid")

small_sample_data <- head(plot_elemental_data, 200)
class(small_sample_data$Year)
small_sample_data$Year <- as.numeric(small_sample_data$Year)
class(small_sample_data)
ba_ppm_color <- colorBin(palette = 'RdYlGn', small_sample_data$ba_ppm, 10)
co_ppm_color <- colorBin(palette = 'RdYlGn', small_sample_data$co_ppm, 10)
al_ppm_color <- colorBin(palette = 'RdYlGn', small_sample_data$al_ppm, 10)

server <- function(input, output, session) {

  filteredData <- reactive({
    small_sample_data [small_sample_data$Year >= input$range[1] & small_sample_data$Year <= input$range[2],]
  })

  output$mymap <- renderLeaflet({
    leaflet(data = small_sample_data) %>%
    #leaflet(data = filteredData()) %>%
      addProviderTiles(providers$Stamen.TonerLite, options = providerTileOptions(noWrap = TRUE), group = "Basic Map") %>%
      addProviderTiles(providers$Esri.WorldImagery, options = providerTileOptions(noWrap = TRUE), group = "Topographical")%>%
      addProviderTiles(providers$Esri.WorldTopoMap, options = providerTileOptions(noWrap = TRUE), group = "Lined Topographical")%>%
      #addMarkers(~Long, ~Lat, group = "Plot Markers")%>%
      addLayersControl(
        baseGroups = c("Basic Map", "Topographical", "Lined Topographical"),
        overlayGroups = c("ba_ppm", "co_ppm", "al_ppm", "Plot Markers"),
        options = layersControlOptions(collapsed = FALSE)
      )%>%
    addLegend('bottomleft', pal = ba_ppm_color, values = small_sample_data$ba_ppm,
              title = 'Color Gradient for ba_ppm',
              opacity = 1, group = "ba_ppm")%>%
      addLegend('bottomleft', pal = co_ppm_color, values = small_sample_data$co_ppm,
                title = 'Color Gradient for co_ppm',
                opacity = 1, group = "co_ppm") %>%
      addLegend('bottomleft', pal = al_ppm_color, values = small_sample_data$al_ppm,
                title = 'Color Gradient for al_ppm',
                opacity = 1, group = "al_ppm")%>%
      hideGroup(c("ba_ppm", "al_ppm", "co_ppm"))
  })
  
  observeEvent(input$go, {
    screenshot(filename = "~/Desktop/PWS465/shinyapp/shinyscreenshot")
  })
  
  observe({
    leafletProxy("mymap", data = filteredData())%>%
      clearMarkers()%>%
      addMarkers(~Long, ~Lat, group = "Plot Markers")%>%
      clearShapes()%>%
      addCircles(~Long, ~Lat, ~ba_ppm*500, stroke = F, color = ~ba_ppm_color(ba_ppm),group = "ba_ppm")%>%
      addCircles(~Long, ~Lat, ~co_ppm*500, stroke = F, color = ~co_ppm_color(co_ppm) ,group = "co_ppm")%>%
      addCircleMarkers(~Long, ~Lat, ~al_ppm*500, stroke = F, color = ~al_ppm_color(al_ppm) ,group = "al_ppm")
  })
}

shinyApp(ui, server)

