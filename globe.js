const world = Globe()

(document.getElementById("globe"))

.globeImageUrl("//unpkg.com/three-globe/example/img/earth-dark.jpg")

.pointsData([

{lat:28.6,lng:77.2},
{lat:40.7,lng:-74.0},
{lat:55.7,lng:37.6}

])

.pointAltitude(0.1)

.pointColor(()=> "red")
