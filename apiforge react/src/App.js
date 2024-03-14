import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./componet/pages/Home";
import Docs from "./componet/pages/Docs";
import Header from "./componet/Header";
import NoPage from "./componet/NoPage";
import APIContext from "./APIContext";
import React from "react";

function App() {
  const [selectedItem, setSelectedItem] = React.useState("Blog");
  const Data = {
    Blog: {
      name: "Blog",
      describe: "Developers can integrate a blog API into their applications or websites to enable seamless content management and interaction with the blogging platform, facilitating tasks such as content creation, publishing, and moderation.",
      link1: "http//:cdmi.com1",
      link2: "http//:cdmi.com2",
      link3: "http//:cdmi.com3",
      link4: "http//:cdmi.com4",
      link5: "http//:cdmi.com5",
      link6: "http//:cdmi.com6",
      field: [
        { key: "imgURL", value: "Value1" },
        { key: "title", value: "Value2" },
        { key: "category", value: "Value3" },
        { key: "description", value: "Value4" },
      ],
    },
    Contactbook: {
      name: "Contact Book",
      describe:
        "A ContactBook API simplifies the process of managing contact information within an application or system, providing developers with a standardized interface to integrate contact management functionality into their software solutions.",
      link1: "http//:cdmi.com1",
      link2: "http//:cdmi.com2",
      link3: "http//:cdmi.com3",
      link4: "http//:cdmi.com4",
      link5: "http//:cdmi.com5",
      link6: "http//:cdmi.com6",
      field: [
        { key: "fitstName", value: "Value1" },
        { key: "lastName", value: "Value2" },
        { key: "mobileNo", value: "Value3" },
        { key: "email", value: "Value4" },
        { key: "nickName", value: "Value5" },
        { key: "tempId", value: "Value6" },
      ],
    },
    Food: {
      name: "Food",
      describe:
        "Food APIs are valuable tools for developers looking to build applications and services related to nutrition, cooking, meal planning, restaurant discovery, and dietary management. By leveraging these APIs, developers can create innovative solutions that cater to the needs of food enthusiasts, health-conscious individuals, and culinary professionals.",
      link1: "http//:cdmi.com1",
      link2: "http//:cdmi.com2",
      link3: "http//:cdmi.com3",
      link4: "http//:cdmi.com4",
      link5: "http//:cdmi.com5",
      link6: "http//:cdmi.com6",
      field: [
        { key: "productName", value: "Value1" },
        { key: "weight", value: "Value2" },
        { key: "energy", value: "Value3" },
        { key: "protine", value: "Value4" },
        { key: "carbohydrate", value: "Value5" },
        { key: "fat", value: "Value6" },
      ],
    },
    GST: {
      name: "GST Invoice",
      describe:
        "GST invoices are crucial for both the seller and the buyer for compliance with tax regulations and for maintaining accurate financial records. They help ensure transparency in business transactions and facilitate the calculation and reporting of GST liabilities to tax authorities.",
      link1: "http//:cdmi.com1",
      link2: "http//:cdmi.com2",
      link3: "http//:cdmi.com3",
      link4: "http//:cdmi.com4",
      link5: "http//:cdmi.com5",
      link6: "http//:cdmi.com6",
      field: [
        { key: "name", value: "Value1" },
        { key: "gstno", value: "Value2" },
        { key: "baseamount", value: "Value3" },
        { key: "gstpercentage", value: "Value4" },
        { key: "totalamount", value: "Value5" },
        { key: "invoiceno", value: "Value6" },
      ],
    },
    Hospital: {
      name: "Hospital",
      describe:
        "Hospital APIs streamline communication and data exchange between different healthcare applications and systems, improving efficiency, accuracy, and patient care outcomes. They enable developers to build innovative healthcare solutions, such as patient portals, telemedicine platforms, health monitoring apps, and more, by leveraging the rich functionality and data available within hospital systems.",
      link1: "http//:cdmi.com1",
      link2: "http//:cdmi.com2",
      link3: "http//:cdmi.com3",
      link4: "http//:cdmi.com4",
      link5: "http//:cdmi.com5",
      link6: "http//:cdmi.com6",
      field: [
        { key: "pesantName", value: "Value1" },
        { key: "doctor", value: "Value2" },
        { key: "diseaseType", value: "Value3" },
        { key: "description", value: "Value4" },
        { key: "medicineName", value: "Value5" },
        { key: "wardType", value: "Value6" },
      ],
    },
    Hotel: {
      name: "Hotel",
      describe:
        "Hotel APIs enable developers to build a wide range of applications and services related to hotel bookings and travel planning, such as hotel booking websites, mobile apps, travel agent portals, and corporate travel management systems. By leveraging the rich functionality and data available within hotel APIs, developers can create innovative solutions that streamline the hotel booking process, enhance the guest experience, and drive business growth for hoteliers.",
      link1: "http//:cdmi.com1",
      link2: "http//:cdmi.com2",
      link3: "http//:cdmi.com3",
      link4: "http//:cdmi.com4",
      link5: "http//:cdmi.com5",
      link6: "http//:cdmi.com6",
      field: [
        { key: "customerName", value: "Value1" },
        { key: "documentType", value: "Value2" },
        { key: "documentNumber", value: "Value3" },
        { key: "roomNo", value: "Value4" },
        { key: "entryTime", value: "Value5" },
        { key: "exitTime", value: "Value6" },
        { key: "paymentStatus", value: "done or panding" },
      ],
    },
    Insurance: {
      name: "Insurance",
      describe:
        "Insurance APIs enable developers to build a wide range of applications and services related to insurance, such as insurance portals, mobile apps, claims management systems, and insurance marketplace platforms. By leveraging the functionality and data available within insurance APIs, developers can create innovative solutions that streamline insurance processes, improve customer experiences, and drive business growth for insurance providers.",
      link1: "http//:cdmi.com1",
      link2: "http//:cdmi.com2",
      link3: "http//:cdmi.com3",
      link4: "http//:cdmi.com4",
      link5: "http//:cdmi.com5",
      link6: "http//:cdmi.com6",
      field: [
        { key: "name", value: "Value1" },
        { key: "amount", value: "Value2" },
        { key: "discription", value: "Value3" },
        { key: "type", value: "Value4" },
        { key: "id", value: "Value5" },
      ],
    },
    Mailid: {
      name: "MailId Sever",
      describe:
        "Mail ID Server APIs enable developers to integrate email functionality into a wide range of applications and services, such as email clients, collaboration tools, marketing automation platforms, customer support systems, and business process automation solutions. By leveraging the functionality and data available within Mail ID Server APIs, developers can create innovative email-related applications that enhance productivity, communication, and collaboration for users.",
      link1: "http//:cdmi.com1",
      link2: "http//:cdmi.com2",
      link3: "http//:cdmi.com3",
      link4: "http//:cdmi.com4",
      link5: "http//:cdmi.com5",
      link6: "http//:cdmi.com6",
      field: [
        { key: "mailId", value: "Value1" },
        { key: "password", value: "Value2" },
        { key: "phoneNo", value: "Value3" },
        { key: "recoveryMailId", value: "Value4" },
        { key: "Idtype", value: "Value5" },
        { key: "firstName", value: "Value6" },
        { key: "lastName", value: "Value7" },
      ],
    },
    Mobile: {
      name: "Mobile",
      describe:
        "Mobile APIs enable developers to create powerful, feature-rich mobile applications by leveraging backend services, data sources, and functionalities available through APIs. By integrating with Mobile APIs, developers can build apps that deliver personalized experiences, streamline user interactions, and provide seamless access to data and services on mobile devices.",
      link1: "http//:cdmi.com1",
      link2: "http//:cdmi.com2",
      link3: "http//:cdmi.com3",
      link4: "http//:cdmi.com4",
      link5: "http//:cdmi.com5",
      link6: "http//:cdmi.com6",
      field: [
        { key: "display", value: "Value1" },
        { key: "imgURL", value: "Value2" },
        { key: "processor", value: "Value3" },
        { key: "storage", value: "Value4" },
        { key: "battery", value: "Value5" },
        { key: "camera", value: "Value6" },
      ],
    },
    Movie: {
      name: "Movie",
      describe:
        "Movie APIs enable developers to build a wide range of applications and services related to movie discovery, recommendation, streaming, and entertainment. By leveraging the functionality and data available through Movie APIs, developers can create innovative movie-related apps, such as movie databases, movie review platforms, streaming platforms, movie recommendation engines, and movie ticketing services.",
      link1: "http//:cdmi.com1",
      link2: "http//:cdmi.com2",
      link3: "http//:cdmi.com3",
      link4: "http//:cdmi.com4",
      link5: "http//:cdmi.com5",
      link6: "http//:cdmi.com6",
      field: [
        { key: "posterURL", value: "Value1" },
        { key: "movieName", value: "Value2" },
        { key: "runningTime", value: "Value3" },
        { key: "availableOn", value: "Value4" },
        { key: "movieType", value: "Value5" },
      ],
    },
    Password: {
      name: "Password Saver",
      describe:
        "Password Saver APIs enable developers to build secure password management solutions and applications, such as password managers, identity management platforms, enterprise password vaults, and security-as-a-service (SecaaS) offerings. By leveraging the functionality and security features available through Password Saver APIs, developers can help users protect their sensitive credentials, mitigate the risk of password-related security breaches, and enhance overall cybersecurity posture.",
      link1: "http//:cdmi.com1",
      link2: "http//:cdmi.com2",
      link3: "http//:cdmi.com3",
      link4: "http//:cdmi.com4",
      link5: "http//:cdmi.com5",
      link6: "http//:cdmi.com6",
      field: [
        { key: "id ", value: "Value1" },
        { key: "password", value: "Value2" },
        { key: "webName", value: "Value3" },
        { key: "webLink", value: "Value4" },
        { key: "description", value: "Value5" },
      ],
    },
    Note: {
      name: "Note",
      describe:
        "Note APIs enable developers to build a wide range of note-taking applications and services, such as note-taking apps, productivity tools, knowledge management platforms, collaboration platforms, and task management systems. By leveraging the functionality and data available through Note APIs, developers can create innovative solutions that streamline note-taking processes, enhance productivity, and improve information management for users.",
      link1: "http//:cdmi.com1",
      link2: "http//:cdmi.com2",
      link3: "http//:cdmi.com3",
      link4: "http//:cdmi.com4",
      link5: "http//:cdmi.com5",
      link6: "http//:cdmi.com6",
      field: [
        { key: "date", value: "Value1" },
        { key: "time", value: "Value2" },
        { key: "description", value: "Value3" },
        { key: "title", value: "Value5" },
      ],
    },
    Payment: {
      name: "Payment",
      describe:
        "Payment APIs enable developers to build e-commerce platforms, online marketplaces, mobile apps, subscription services, and other digital commerce solutions that require payment processing functionality. By leveraging the functionality and data available through Payment APIs, developers can create seamless payment experiences for customers, streamline payment workflows for merchants, and drive business growth through secure and reliable payment processing.",
      link1: "http//:cdmi.com1",
      link2: "http//:cdmi.com2",
      link3: "http//:cdmi.com3",
      link4: "http//:cdmi.com4",
      link5: "http//:cdmi.com5",
      link6: "http//:cdmi.com6",
      field: [
        { key: "paymentType", value: "Value1" },
        { key: "accountType", value: "Value2" },
        { key: "description", value: "Value3" },
        { key: "date", value: "Value4" },
        { key: "location", value: "Value5" },
        { key: "amount", value: "Value6" },
      ],
    },
    Playlist: {
      name: "Playlist",
      describe:
        "Playlist APIs enable developers to build a wide range of applications and services related to playlist management, media playback, content discovery, and social sharing. By leveraging the functionality and data available through Playlist APIs, developers can create innovative solutions that enhance the music, video, or podcast listening experience for users, streamline playlist management workflows, and foster community engagement and collaboration around curated multimedia content.",
      link1: "http//:cdmi.com1",
      link2: "http//:cdmi.com2",
      link3: "http//:cdmi.com3",
      link4: "http//:cdmi.com4",
      link5: "http//:cdmi.com5",
      link6: "http//:cdmi.com6",
      field: [
        { key: "songname", value: "Value1" },
        { key: "group", value: "Value2" },
        { key: "link", value: "Value3" },
        { key: "type", value: "Value4" },
        { key: "singer", value: "Value5" },
      ],
    },
    Sports: {
      name: "Sports",
      describe:
        "Sports APIs enable developers to build a wide range of applications and services related to sports, such as sports news portals, live score apps, fantasy sports platforms, sports betting sites, sports analytics tools, and sports betting sites. By leveraging the functionality and data available through Sports APIs, developers can create innovative solutions that enhance the sports viewing experience, provide valuable insights and analysis, and engage sports fans across different platforms and devices.",
      link1: "http//:cdmi.com1",
      link2: "http//:cdmi.com2",
      link3: "http//:cdmi.com3",
      link4: "http//:cdmi.com4",
      link5: "http//:cdmi.com5",
      link6: "http//:cdmi.com6",
      field: [
        { key: "playerName", value: "Value1" },
        { key: "sportsName", value: "Value2" },
        { key: "time", value: "Value3" },
        { key: "place", value: "Value4" },
        { key: "playerAge", value: "Value5" },
        { key: "playerWeight", value: "Value6" },
      ],
    },
  };
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/docs">
            <APIContext.Provider
              value={{ Data, selectedItem, setSelectedItem }}
            >
              <Docs></Docs>
            </APIContext.Provider>
          </Route>
          <Route path="*">
            <NoPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
