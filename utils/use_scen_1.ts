import { GameSettings } from "../scenarios/scen_1.ts";

const settings = GameSettings.getInstance();

console.log("Initial Settings:", settings.getSettings());

settings.updateSettings({
    difficulty: "hard",
    graphicsQuality: "high",
    screenSize: "2560x1440",
    musicVolume: 80,
});

console.log("Updated Settings:", settings.getSettings());

settings.save();

