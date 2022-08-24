var confirmed, deaths
jQuery(document).ready(function ($) {
  var settings = {
    url: "https://api.covid19api.com/dayone/country/canada/status/confirmed/live",
    method: "GET",
    timeout: 0
  }
  $.ajax(settings).done(function (response) {
    $("#total_cases").append(response[response.length - 1].Cases)
  })
})

jQuery(document).ready(function ($) {
  var settings = {
    url: "https://api.covid19api.com/dayone/country/canada/status/deaths/live",
    method: "GET",
    timeout: 0
  }
  $.ajax(settings).done(function (response) {
    $("#total_deaths").append(response[response.length - 1].Cases)
  })
})

jQuery(document).ready(function ($) {
  var settings = {
    url: "https://api.covid19api.com/dayone/country/canada/status/recovered/live",
    method: "GET",
    timeout: 0
  }
  $.ajax(settings).done(function (response) {
    $("#total_recovered").append(response[response.length - 1].Cases)
  })
})

var settings = {
  url: "https://api.covid19api.com/dayone/country/canada/status/confirmed/live",
  method: "GET",
  timeout: 0
}
jQuery(document).ready(function ($) {
  var epi_curve_data = $("#epi_curve_data")
  $.ajax(settings).done(function (response) {
    $.each(response, function (i, item) {
      epi_curve_data.append(`<tr><td id="date">${item.Date.substring(0, 10)}</td>
      <td id="confirmed">${item.Cases}</td></tr>`)
    })
  })
})