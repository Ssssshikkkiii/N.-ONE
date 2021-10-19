// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile0 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`0a000d00000102020202020203000005120f0f0f0f0f040000050f0f0f0f0f0f040000050f0f0f0f0f0f040000050f0f0f0f0f0f04000006080911110a0807000000000511110400000000010d0b11110c02030000050f0f0f0f0f0f0e0000050f0f0f0f0f0f0e0000050f0f0f0f100f0e0000050f0f0f0f0f0f0e0000060808080808080700`, img`
2 2 2 2 2 2 2 2 2 2 
2 2 . . . . . . 2 2 
2 2 . . . . . . 2 2 
2 2 . . . . . . 2 2 
2 2 . . . . . . 2 2 
2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 
2 2 . . . . . . 2 2 
2 2 . . . . . . 2 2 
2 2 . . . . . . 2 2 
2 2 . . . . . . 2 2 
2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterNorth0,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterEast1,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleInnerNorthEast,sprites.dungeon.purpleInnerNorthWest,sprites.dungeon.purpleInnerSouthEast,sprites.dungeon.purpleInnerSouthWest,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleOuterEast0,sprites.dungeon.floorLight0,sprites.dungeon.chestClosed,sprites.dungeon.hazardSpike,sprites.dungeon.buttonOrange], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "tile0":return tile0;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
