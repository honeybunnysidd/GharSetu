mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v12",
  center: curListing.geometry.coordinates,
  zoom: 9,
});
const marker = new mapboxgl.Marker({ color: "#fe424d" })
  .setLngLat(curListing.geometry.coordinates)
  .setPopup(
    new mapboxgl.Popup({ offset: 25 }).setHTML(
      `<h4>${curListing.title}</h4><p>Exact location provided after booking</p>`
    )
  )
  .addTo(map);
