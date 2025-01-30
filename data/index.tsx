type Project = {
    id: number,
    location: string;
    developer: string;
    pricing: string;
    occupancyDate: string;
    title: string;
    coverImage: string;
    stage: string;
    houseType: string;
}

function getData() : Project[] {
    return [
        {
            id: 1,
            "location": "Brampton",
            "developer": "Aspen Ridge",
            "pricing": "Low $1.2Ms",
            "occupancyDate": "Jul - Sep 2023",
            "title": "Mayfield Village ",
            "coverImage": "/project-mayfield-village.webp",
            "stage": "Available",
            "houseType": "detached",
          },
          {
            id: 2,
            "location": "Mississauga ",
            "developer": "Solmar",
            "pricing": "Mid 800s",
            "occupancyDate": "Oct 2024",
            "title": "ORO at Edge Towers",
            "coverImage": "/project-oro-at-edge-towers.webp",
            "stage": "Available",
            "houseType": "detached",
          },
          {
            id: 3,
            "location": "Richmond Hill",
            "developer": "Conservatory Group",
            "pricing": "Mid $3.4Ms",
            "occupancyDate": "TBA",
            "title": "Observatory Hill",
            "coverImage": "/project-observatory-hill.webp",
            "stage": "Available",
            "houseType": "detached",
          },
          {
            id: 4,
            "location": "Whitby",
            "developer": "Star Residence ",
            "pricing": "High $700s",
            "occupancyDate": "Jul 2024",
            "title": "Rossmont Green 2",
            "coverImage": "/project-rossmont-green.webp",
            "stage": "Available",
            "houseType": "detached",
          },
          {
            id: 5,
            "location": "Atlantic Avenue",
            "developer": "Mickey Rourke",
            "pricing": "$899,000 - $1,100,000",
            "occupancyDate": "2025",
            "title": "The Delaware",
            "coverImage": "/project-the-delaware.webp",
            "stage": "Available",
            "houseType": "detached",
          },
          {
            id: 6,
            "location": "Scarborough ",
            "developer": "Crown Communities",
            "pricing": "Low $900s",
            "occupancyDate": "Fall 2025",
            "title": "The Narrative",
            "coverImage": "/project-the-narrative.webp",
            "stage": "Available",
            "houseType": "detached",
          },
          {
            id: 7,
            "location": "Oshawa",
            "developer": "Tribute Communities",
            "pricing": "From the $500's",
            "occupancyDate": "Nov 2024",
            "title": "UC Tower 3",
            "coverImage": "/project-uc-tower.webp",
            "stage": "Available",
            "houseType": "detached",
          },
          {
            id: 8,
            "location": "Vaughan - Bathurst and Major Mackenzie",
            "developer": "Conservatory Group",
            "pricing": "$2,800,000.00 - $3,700,000.00",
            "occupancyDate": "Fall 2022",
            "title": "Upper West Side",
            "coverImage": "/project-upper-west-side.webp",
            "stage": "Available",
            "houseType": "detached",
          },
          {
            id: 9,
            "location": "Brampton",
            "developer": "Vandyk",
            "pricing": "Mid 900s",
            "occupancyDate": "Dec 2023",
            "title": "Uptowns",
            "coverImage": "/project-uptowns.webp",
            "stage": "Available",
            "houseType": "detached",
          },
          {
            id: 10, 
            "location": "Vaughan",
            "developer": "Townwood Homes, Guglietti Brothers Investments and Rosehaven Homes.",
            "pricing": "High $700s",
            "occupancyDate": "Jan 2026",
            "title": "Vincent",
            "coverImage": "/project-vincent.webp",
            "stage": "Available",
            "houseType": "farm",
          },
          {
            id: 11,
            "location": "Toronto - Lakeshore and Park Lawn",
            "developer": "Conservatory Group",
            "pricing": "Mid $700s",
            "occupancyDate": "Aug 2023",
            "title": "Water's Edge at the Cove",
            "coverImage": "/project-waters-edge-at-the-cove.webp",
            "stage": "Available",
            "houseType": "condo",
          }
    ]
}

export default getData();