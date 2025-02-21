import React from "react";
import { Box, Button, Input, FormControl, FormLabel,Divider } from "@chakra-ui/react";

function sendPOST() {
  let formData = { course: "PS 280"};
  fetch('https://courseweatherdivij-b7emhxbeend4c5h3.canadacentral-01.azurewebsites.net/', {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: { 'Content-Type': 'application/json' },
  })
    .then(res => res.json())
    .then(data => {
      if ('error' in data) {
        document.getElementById('content').innerHTML = `<hr><h3>Error</h3><p>${JSON.stringify(data)}</p>`;
      } else {
        let meetingDate = new Date(Date.parse(data.nextCourseMeeting));
        let meetingDateStr = meetingDate.toLocaleString('en-US', {
          weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: '2-digit', second: '2-digit'
        });

        let forecastDate = new Date(Date.parse(data.forecastTime));
        let forecastDateStr = forecastDate.toLocaleString('en-US', {
          weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: '2-digit', second: '2-digit'
        });

        document.getElementById('content').innerHTML = `<hr><h3>Weather for the next ${data.course} meeting</h3><ul><li>Next Meeting: ${meetingDateStr}</li><li>Forecast Time: ${forecastDateStr}</li><li>Temperature: ${data.temperature}°F</li><li>Forecast: ${data.shortForecast}</li></ul>`;
      }
    })
    .catch(err => {
      document.getElementById('content').innerHTML = `<hr><h3>Error ${err.name}</h3><p>${err.message}</p>`;
    });
}

const WeatherButton = () => {
  return (
    <Box>
      <h1>Weather of Your Next Course Meeting</h1>
      <FormControl>
        <FormLabel>Course:</FormLabel>
        <Input
          type="text"
          id="course"
          placeholder="Course Subject and Number"
        />
      </FormControl>
      <Button onClick={sendPOST} mt={4}>Get Weather!</Button>
      <Divider />
      <Box id="content" mt={4}></Box>
    </Box>
  );
};

export default WeatherButton;
