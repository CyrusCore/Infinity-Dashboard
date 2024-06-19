import React, { useContext } from "react";
import { GlobalContext } from "../../Contexts/Context";
import "./about.css";

const About = () => {
  const [user, setUser] = useState(null);
  const [about, setAbout] = useState(null);
  const [cmdsData, setCmdsData] = useState(null);
  // fetching home data
  useEffect(() => {
    const getData = async () => {
      const headers = {
      'User-Agent': 'curl/7.64.1',  // Adjust this version number based on your actual curl version
      'Accept': '*/*'
      };
      const response = await axios.get(`http://infinity-api.kappurumedia.my.id:8000/home`, { headers });
      setUser(response.data);
    };
    getData();
  }, []);
  // fetching about data
  useEffect(() => {
    const getData = async () => {
    const headers = {
      'User-Agent': 'curl/7.64.1',  // Adjust this version number based on your actual curl version
      'Accept': '*/*'
    };
      const response = await axios.get(`http://infinity-api.kappurumedia.my.id:8000/about`, { headers });
      setAbout(response.data);
    };
    getData();
  }, []);
  // fetching commands data
  useEffect(() => {
    const getData = async () => {
    const headers = {
      'User-Agent': 'curl/7.64.1',  // Adjust this version number based on your actual curl version
      'Accept': '*/*'
    };
      const response = await axios.get(`http://infinity-api.kappurumedia.my.id:8000/commands`, { headers });
      setCmdsData(response.data);
    };
    getData();
  }, []);
  const info = [
    {
      name: `Users`,
      value: `${about?.usersCount}`,
    },
    {
      name: `Guilds`,
      value: `${about?.guildsCount}`,
    },
    {
      name: `Channels`,
      value: `${about?.channelsCount}`,
    },
  ];
  const statsinfo = [
    {
      name: `Uptime`,
      value: about?.uptime,
    },
    {
      name: `RAM`,
      value: `${about?.ram?.usage}/${about?.ram?.total}`,
    },
    {
      name: `CPU`,
      value: about?.cpu,
    },
    {
      name: `NodeJS`,
      value: about?.NodeVersion,
    },
    {
      name: `Discord.JS`,
      value: about?.DJSVersion,
    },
    {
      name: `Ping`,
      value: about?.ping,
    },
  ];
  return (
    <div className="about">
      <h1 className="hover_line about_title"> About </h1>
      <div className="info">
        {info.map((item, index) => (
          <div key={index} className="info_box">
            <h2> {item.name} </h2>
            <p> {item.value || 0} </p>
          </div>
        ))}
      </div>
      {/* stats */}
      <h1 className="stats_title">Stats</h1>
      <div className="stats">
        {statsinfo.map((item, index) => (
          <p key={index}>
            {item.name} :: {item.value}{" "}
          </p>
        ))}
      </div>
    </div>
  );
};

export default About;
