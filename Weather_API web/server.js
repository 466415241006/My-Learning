const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/api/weather', async (req , res) =>{
    try{
        const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=13.75&longitude=100.51&current=temperature_2m,relative_humidity_2m,wind_speed_10m');
        const data = await response.json();

        res.json({
            city: 'Bangkok',
            temperature: data.current.temperature_2m,
            humidity: data.current.relative_humidity_2m,
            windSpeed: data.current.wind_speed_10m
        });
    } catch (error) {
        res.status(500).json({ error: 'ไม่สามารถดึงข้อมูลได้' });
    }
});

app.listen(PORT,() => {
    console.log(`Server running at http://localhost:${PORT}`);
});