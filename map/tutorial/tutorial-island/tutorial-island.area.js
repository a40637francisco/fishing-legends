const TUTORIAL_ISLAND_AREA = {
    id: 'area_1',
    areaId: 1,
    name: 'Tutorial Island',
    zones: [
        'zone_1',
        'zone_2',
    ]
}   

Falta as zones, ver no que dá

function addTutorialIslandArea(region) {
    const area = { ...TUTORIAL_ISLAND_AREA }
    area.render = () => tutorialIslandAreaRender()
    
    region[TUTORIAL_ISLAND_AREA.id] = area
}

