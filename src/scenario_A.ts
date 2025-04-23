type Difficulty = "easy" | "medium" | "hard";
type Language = "english" | "spanish" | "french";
type ScreenSize = "1920x1080" | "2560x1440" | "3840x2160";
type GraphicsQuality = "low" | "medium" | "high";

interface GameSettingsPattern {
    difficulty: Difficulty;
    language: Language;

    musicVolume: number; 
    soundEffectsVolume: number; 

    screenSize: ScreenSize;
    graphicsQuality: GraphicsQuality;
}

export class GameSettings {
    private static instance: GameSettings;

    private settings: GameSettingsPattern = {
        difficulty: "medium",
        language: "english",
        musicVolume: 50,
        soundEffectsVolume: 50,
        screenSize: "1920x1080",
        graphicsQuality: "medium",
    };

    private constructor() {
        this.load();
    }

    public static getInstance(): GameSettings {
        if (!GameSettings.instance) {
            GameSettings.instance = new GameSettings();
        }
        return GameSettings.instance;
    }
    public getSettings(): GameSettingsPattern {
        return this.settings;
    }

    public updateSettings(newSettings: Partial<GameSettingsPattern>) {
        this.settings = { ...this.settings, ...newSettings };
    }

    public save() {
        localStorage.setItem("gameSettings", JSON.stringify(this.settings));
    }
    public load() {
        const savedSettings = localStorage.getItem("gameSettings");
        if (savedSettings) {
            this.settings = JSON.parse(savedSettings);
        }
    }
}