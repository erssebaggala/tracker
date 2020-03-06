import React, { useState, useEffect, useRef } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Card, Typography, Alert, Input } from 'antd';
import styles from './Welcome.less';
import { 
    withLeaflet,
	Map, 
	TileLayer, 
	Popup, 
	Polyline, 
	Marker, 
	Tooltip,
	Circle	} from 'react-leaflet';
import L from "leaflet";
import 'leaflet/dist/leaflet.css';
import { Sidebar, Tab } from 'react-leaflet-sidetabs';
import { 
	FiChevronRight, 
	FiList,
	FiShare2, 
	FiDatabase,
	FiFilter	} from "react-icons/fi";
	
//Fix icons
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const { Search } = Input;

const DUMMY_LOCATIONS = [
	{
		latitude: -1.383593,
		longitude: 29.593872,
		time: '09:00',
		date: '06-03-2020'
	},
	{
		latitude: -0.808565,
		longitude: 30.515624,
		time: '09:00',
		date: '06-03-2020'
	},
	{
		latitude: -0.757622,
		longitude: 30.602280,
		time: '09:00',
		date: '06-03-2020'
	},
	{
		latitude: 0.347596,
		longitude: 32.582520,
		time: '08:00',
		date: '05-03-2020'
	},
];

const color = '#3388ff'	;
const radius= 1000;

const locations = DUMMY_LOCATIONS.map( (v, i) => (
<React.Fragment key={i}>
	<Circle 
		color={color}
		fill={true}
		center={[v.latitude, v.longitude]}
		radius={radius}>
	</Circle>
</React.Fragment>
));

const connectingLines = DUMMY_LOCATIONS.map( (v, i) => { 
const nextLocation  = (i === DUMMY_LOCATIONS.length -1) ? DUMMY_LOCATIONS[i-1] : DUMMY_LOCATIONS[i+1];

console.log("nextLocation:", [
			[v.latitude, v.longitude], 
			[nextLocation.latitude, nextLocation.longitude]
		]);

return 
(<React.Fragment key={i}>
	<Polyline 
		color="red"
		positions={[
			[v.latitude, v.longitude], 
			[nextLocation.latitude, nextLocation.longitude]
		]}
		>
	</Polyline>
</React.Fragment>);

});


const connectingPoints = DUMMY_LOCATIONS.map( v => [v.latitude, v.longitude] );


export default (): React.ReactNode => {

	const [ latitude, setLatitude] = useState<float>(0.347596);
	const [ longitude, setLongitude] = useState<float>(32.582520);
	const [ center, setCenter] = useState<float>([0.347596, 32.582520]);
	const [ zoom, setZoom] = useState<integer>(13);
	const [ height, setHeight] = useState<integer>(window.innerHeight-150);
	
	const [ sideBarCollapsed, setSideBarCollapsed] = useState<boolean>(true);
	const [ selectedTab, setSelectedTab] = useState<boolean>('search');
	const mapRef = useRef(null);
	
	const onSideBarOpen = (tabId) => {
		setSelectedTab(tabId);
		setSideBarCollapsed(false);
	}
	
	const onSideBarClose = () => {
		setSideBarCollapsed(true);
	}
	
	console.log("height:", height);
	
	return (
	  <>
		<Card>
		  
			<Map 
				ref={mapRef} 
				attributionControl={false}
				center={center} 
				zoom={zoom} 
				style={{height: height + 'px'}} 
			>
				<TileLayer
				  attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
				  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				
				{locations}
				
				{connectingLines}
				
	<Polyline 
		color="red"
		positions={connectingPoints}
		>
	</Polyline>
	
					<Sidebar
						  id="gis_sidebar"
						  position="right"
						  collapsed={sideBarCollapsed}
						  closeIcon={<FiChevronRight />}
						  selected={selectedTab}
						  onOpen={onSideBarOpen}
						  onClose={onSideBarClose}
						>
						
							<Tab id="search" header="Search" icon={<FiFilter />}>
								<div style={{marginTop: 5}}>
									<Search
										  placeholder="Enter phone number"
										  onSearch={value => console.log(value)}
										  style={{ width: "100%" }}
										/>
								</div>
							</Tab>

					</Sidebar>
			</Map>

		</Card>

	  </>
	);
};
