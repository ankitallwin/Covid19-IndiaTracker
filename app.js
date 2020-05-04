$.ajax({
  url: "https://api.covid19api.com/summary",
  method: "GET",
  dataType: "JSON",
  success: function (data) {
    $("#confirmed").append(
      "<tr>" + "<td>" + data.Global.TotalConfirmed + "</td>" + "</tr>"
    );
  },
});

$.ajax({
  url: "https://api.covid19api.com/summary",
  method: "GET",
  dataType: "JSON",
  success: function (data) {
    $("#active").append(
      "<tr>" +
        "<td>" +
        (data.Global.TotalConfirmed - data.Global.TotalRecovered) +
        "</td>" +
        "</tr>"
    );
  },
});

$.ajax({
  url: "https://api.covid19api.com/summary",
  method: "GET",
  dataType: "JSON",
  success: function (data) {
    $("#recovered").append(
      "</tr>" + "<tr>" + "<td>" + data.Global.TotalRecovered + "</td>" + "</tr>"
    );
  },
});

$.ajax({
  url: "https://api.covid19api.com/summary",
  method: "GET",
  dataType: "JSON",
  success: function (data) {
    $("#deaths").append(
      "</tr>" + "<tr>" + "<td>" + data.Global.TotalDeaths + "</td>" + "</tr>"
    );
  },
});

//INDIA

$.ajax({
  url: "https://api.covid19india.org/data.json",
  method: "GET",
  dataType: "JSON",
  success: function (data) {
    $("#india1").append(
      "</tr>" +
        "<tr>" +
        "<td>" +
        data.statewise[0].confirmed +
        "</td>" +
        "</tr>"
    );
  },
});

$.ajax({
  url: "https://api.covid19india.org/data.json",
  method: "GET",
  dataType: "JSON",
  success: function (data) {
    $("#india2").append(
      "</tr>" + "<tr>" + "<td>" + data.statewise[0].active + "</td>" + "</tr>"
    );
  },
});

$.ajax({
  url: "https://api.covid19india.org/data.json",
  method: "GET",
  dataType: "JSON",
  success: function (data) {
    $("#india3").append(
      "</tr>" +
        "<tr>" +
        "<td>" +
        data.statewise[0].recovered +
        "</td>" +
        "</tr>"
    );
  },
});

$.ajax({
  url: "https://api.covid19india.org/data.json",
  method: "GET",
  dataType: "JSON",
  success: function (data) {
    $("#india4").append(
      "</tr>" + "<tr>" + "<td>" + data.statewise[0].deaths + "</td>" + "</tr>"
    );
  },
});

$.ajax({
  url: "https://api.covid19india.org/data.json",
  method: "GET",
  dataType: "JSON",
  success: function (data) {
    $.each(data.statewise, function (key, value) {
      if (key !== 0) {
        $("#states").append(
          "<tr>" +
            "<td>" +
            key +
            "</td>" +
            "<td>" +
            value.state +
            "</td>" +
            "<td>" +
            value.confirmed +
            "</td>" +
            "<td>" +
            value.active +
            "</td>" +
            "<td>" +
            value.recovered +
            "</td>" +
            "<td>" +
            value.deaths +
            "</td>" +
            "</tr>"
        );
      } else {
        $("#india").append(
          "<tr>" +
            "<td>" +
            "Confirmed" +
            "</td>" +
            "<td>" +
            value.confirmed +
            "</td>" +
            "</tr>" +
            "<tr>" +
            "<td>" +
            "Active" +
            "</td>" +
            "<td>" +
            value.active +
            "</td>" +
            "</tr>" +
            "<tr>" +
            "<td>" +
            "Recovered" +
            "</td>" +
            "<td>" +
            value.recovered +
            "</td>" +
            "</tr>" +
            "<tr>" +
            "<td>" +
            "Deaths" +
            "</td>" +
            "<td>" +
            value.deaths +
            "</td>" +
            "</tr>"
        );
      }
    });
  },
});
