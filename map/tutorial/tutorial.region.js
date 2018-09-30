const TUTORIAL_REGION = {
    id: 'region_1',
    regionId: 1,
    name: 'Tutorial Lands',
    areas: [
        'area_1',
        'area_2',
    ]
}   


function addTutorialRegion(map) {
    const region = { ...TUTORIAL_REGION }
    region.render = () => tutorialRegionRender()
    
    map[TUTORIAL_REGION.id] = region
}

