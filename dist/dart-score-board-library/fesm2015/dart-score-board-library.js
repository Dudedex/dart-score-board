import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { moveItemInArray, DragDropModule } from '@angular/cdk/drag-drop';
import { Injectable, Component, Input, ViewChild, EventEmitter, Output, NgModule, defineInjectable } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DartScoreBoardLibraryService {
    constructor() { }
}
DartScoreBoardLibraryService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DartScoreBoardLibraryService.ctorParameters = () => [];
/** @nocollapse */ DartScoreBoardLibraryService.ngInjectableDef = defineInjectable({ factory: function DartScoreBoardLibraryService_Factory() { return new DartScoreBoardLibraryService(); }, token: DartScoreBoardLibraryService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class De {
    /**
     * @return {?}
     */
    static translation() {
        return {
            // Translation Keys
            'page.dartScoreBoard.setup.title': 'Spieleinstellung',
            'page.dartScoreBoard.setup.gameMode': 'Spielmodus',
            'page.dartScoreBoard.setup.requiredScore': 'Erforderliche Punkte pro Leg',
            'page.dartScoreBoard.setup.player.add': 'hinzufügen',
            'page.dartScoreBoard.setup.player': 'Spieler',
            'page.dartScoreBoard.setup.playerList': 'Spielerliste',
            'page.dartScoreBoard.setup.throwInput': 'Eingabe des Wurfes',
            'page.dartScoreBoard.setup.throwInput.hint': 'Klicken Sie auf das jeweilige Feld um den geworfenen Wert einzugeben.<br/> Klicken Sie auf den äußeren Kreis sollte die Scheibe verfehlt worden sein.',
            'page.dartScoreBoard.setup.throwInput.resetThrow': 'Letzen Wurf zurücksetzen',
            'page.dartScoreBoard.setup.playerLis.hint': '<strong>{{name}}</strong> ist am Zug. <br/> Er darf noch <strong>{{dartCount}}</strong> mal werfen.',
            'page.dartScoreBoard.setup.configure.players': 'Spielermanagement',
            'page.dartScoreBoard.setup.player.add.placeholder': 'Name ...',
            'page.dartScoreBoard.setup.player.order.title': 'Reihenfolge (Drag & Drop)',
            'page.dartScoreBoard.setup.player.add.title': 'Spieler hinzufügen',
            'page.dartScoreBoard.setup.players.notFound': 'Noch keine Spieler hinzugefügt',
            'page.dartScoreBoard.setup.startGame': 'Spiel starten!',
            'page.dartScoreBoard.setup.startNewRound': 'Neue Runde starten!',
            'page.dartScoreBoard.setup.gameInProgress.hint': 'Derzeit wird ein Spiel ausgeführt! Änderungen an den Einstellungen sind deshalb nicht möglich!',
            'page.dartScoreBoard.setup.gameInProgress.cancelQuestion': 'Spiel abbrechen?',
            'page.dartScoreBoard.setup.cancelGame.hint': 'Sind Sie sicher, dass Sie das laufende Spiel beenden möchten?',
            'page.dartScoreBoard.setup.cancelGame.confirm': 'Spiel beenden',
            'page.dartScoreBoard.setup.cancelGame.cancel': 'Spiel fortsetzen',
            'page.dartScoreBoard.setup.playerExists.hint': 'Dieser Spielername ist bereits vergeben',
            'page.dartScoreBoard.game.export': 'Spielstand speichern',
            'page.dartScoreBoard.game.import': 'Spielstand laden',
            'page.dartScoreBoard.score.numberOfDarts': 'Dart Nr.',
            'page.dartScoreBoard.score.details': 'Details',
            'page.dartScoreBoard.score.details.stats': 'Statistiken des Lags',
            'page.dartScoreBoard.score.details.throws': 'Würfe',
            'page.dartScoreBoard.score.details.average': '3 Darts Durchschnitt',
            'page.dartScoreBoard.score.details.dartAverage': 'Durchschnitt pro Dart',
            'page.dartScoreBoard.setup.settings.customized': 'Angepasst',
            'page.dartScoreBoard.setup.gameMode.DOUBLE_IN': 'Doppel rein',
            'page.dartScoreBoard.setup.gameMode.DOUBLE_OUT': 'Doppel raus',
            'page.dartScoreBoard.setup.gameMode.DOUBLE_IN_AND_OUT': 'Doppel rein und raus',
            'page.dartScoreBoard.setup.gameMode.TRIPPLE_IN': 'Dreifach rein',
            'page.dartScoreBoard.setup.gameMode.TRIPPLE_OUT': 'Dreifach raus',
            'page.dartScoreBoard.setup.gameMode.TRIPPLE_IN_AND_OUT': 'Dreifach rein und raus',
            'page.dartScoreBoard.setup.gameMode.FREE_GAME': 'Freies Spiel',
            'page.dartScoreBoard.game.finished': 'Herzlichen Glückwunsch <strong>"{{player}}"</strong>, du hast gewonnen!<br/> Eine neue Runde beginnen?',
            'page.dartScoreBoard.game.winner': 'Das Leg wurde durch <strong>"{{player}}"</strong> gewonnen.<br/> Die übrigen Spieler können fortfahren oder es kann eine neue Runde begonnen werden',
        };
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class En {
    /**
     * @return {?}
     */
    static translation() {
        return {
            // Translation Keys
            'page.dartScoreBoard.setup.title': 'Game settings',
            'page.dartScoreBoard.setup.gameMode': 'Game mode',
            'page.dartScoreBoard.setup.requiredScore': 'Required points per leg',
            'page.dartScoreBoard.setup.player.add': 'add',
            'page.dartScoreBoard.setup.player': 'Player',
            'page.dartScoreBoard.setup.playerList': 'Player list',
            'page.dartScoreBoard.setup.throwInput': 'Throw input',
            'page.dartScoreBoard.setup.throwInput.hint': 'Click on a specific field to submit a throw<br/> To enter a miss click on the outer ring.',
            'page.dartScoreBoard.setup.throwInput.resetThrow': 'Revert last throw',
            'page.dartScoreBoard.setup.playerLis.hint': '<strong>{{name}}</strong>\'s turn. <br/> He has <strong>{{dartCount}}</strong> throws left.',
            'page.dartScoreBoard.setup.configure.players': 'Player management',
            'page.dartScoreBoard.setup.player.add.placeholder': 'Name ...',
            'page.dartScoreBoard.setup.player.order.title': 'Order (Drag & Drop)',
            'page.dartScoreBoard.setup.player.add.title': 'Add player',
            'page.dartScoreBoard.setup.players.notFound': 'No player added yet',
            'page.dartScoreBoard.setup.startGame': 'Start game',
            'page.dartScoreBoard.setup.startNewRound': 'Start new round!',
            'page.dartScoreBoard.setup.gameInProgress.hint': 'A game is running at this moment! In this time, changing the settings is not possible!',
            'page.dartScoreBoard.setup.gameInProgress.cancelQuestion': 'Cancel game?',
            'page.dartScoreBoard.setup.cancelGame.hint': 'Are you sure you want to cancel the game?',
            'page.dartScoreBoard.setup.cancelGame.confirm': 'Cancel',
            'page.dartScoreBoard.setup.cancelGame.cancel': 'Continue',
            'page.dartScoreBoard.setup.playerExists.hint': 'This player exists already',
            'page.dartScoreBoard.game.export': 'Save game',
            'page.dartScoreBoard.game.import': 'Load game',
            'page.dartScoreBoard.score.numberOfDarts': 'Dart no.',
            'page.dartScoreBoard.score.details': 'Details',
            'page.dartScoreBoard.score.details.stats': 'Stats of the lag',
            'page.dartScoreBoard.score.details.throws': 'Throws',
            'page.dartScoreBoard.score.details.average': '3 darts average',
            'page.dartScoreBoard.score.details.dartAverage': 'Dart average',
            'page.dartScoreBoard.setup.settings.customized': 'customized',
            'page.dartScoreBoard.setup.gameMode.DOUBLE_IN': 'Double in',
            'page.dartScoreBoard.setup.gameMode.DOUBLE_OUT': 'Double out',
            'page.dartScoreBoard.setup.gameMode.DOUBLE_IN_AND_OUT': 'Double in and out',
            'page.dartScoreBoard.setup.gameMode.TRIPPLE_IN': 'Tripple in',
            'page.dartScoreBoard.setup.gameMode.TRIPPLE_OUT': 'Tripple out',
            'page.dartScoreBoard.setup.gameMode.TRIPPLE_IN_AND_OUT': 'Tripple in and out',
            'page.dartScoreBoard.setup.gameMode.FREE_GAME': 'Free game',
            'page.dartScoreBoard.game.finished': 'Congratulations <strong>"{{player}}"</strong>, you won the round!<br/> Start a new one?',
            'page.dartScoreBoard.game.winner': '<strong>"{{player}}"</strong> won the lag.<br/> The remaining players can finish the round or you can start a new one',
        };
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TranslationProvider {
    /**
     * @param {?} translate
     * @param {?=} defaultLocale
     * @return {?}
     */
    static setupTranslationProvider(translate, defaultLocale) {
        translate.setTranslation('de', De.translation(), true);
        translate.setTranslation('en', En.translation(), true);
        if (defaultLocale) {
            translate.setDefaultLang(defaultLocale);
        }
        else {
            translate.setDefaultLang('de');
        }
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DartScoreBoardLibraryComponent {
    /**
     * @param {?} translate
     */
    constructor(translate) {
        this.translate = translate;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.translationSetup();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.translationSetup();
    }
    /**
     * @private
     * @return {?}
     */
    translationSetup() {
        TranslationProvider.setupTranslationProvider(this.translate, this.locale);
    }
}
DartScoreBoardLibraryComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-dart-score-board-library',
                template: `
    <app-dart-board-panel></app-dart-board-panel>
  `
            }] }
];
/** @nocollapse */
DartScoreBoardLibraryComponent.ctorParameters = () => [
    { type: TranslateService }
];
DartScoreBoardLibraryComponent.propDecorators = {
    locale: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DartGameData {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LegData {
    constructor() {
        this.scores = [];
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PlayerData {
    constructor() {
        this.currentLeg = new LegData();
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ExportImportDataPanelComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    saveGame() {
        /** @type {?} */
        const a = document.createElement('a');
        /** @type {?} */
        let objectString = '{';
        objectString += '"settings":' + JSON.stringify(this.dartGameData.settings) + ',';
        objectString += '"currentPlayerMapKeys": ' + JSON.stringify(this.dartGameData.currentPlayerMapKeys) + ',';
        objectString += '"currentActivePlayer": ' + JSON.stringify(this.dartGameData.currentActivePlayer) + ',';
        objectString += '"legFinished": ' + JSON.stringify(this.dartGameData.legFinished) + ',';
        objectString += '"gameData": [';
        /** @type {?} */
        let isFirst = true;
        for (const key of Array.from(this.dartGameData.gameData.keys())) {
            if (!isFirst) {
                objectString += ',';
            }
            else {
                isFirst = false;
            }
            /** @type {?} */
            const line = JSON.stringify(this.dartGameData.gameData.get(key));
            objectString += '{"key": "' + key + '",';
            objectString += '"value": ' + line + '}';
        }
        objectString += ']}';
        a.setAttribute('href', 'data:text/plain;charset=utf-u,' + encodeURIComponent(objectString));
        a.setAttribute('download', 'game-data-' + new Date().getTime() + '.json');
        a.click();
    }
    /**
     * @return {?}
     */
    loadGame() {
        this.importGameButton.nativeElement.click();
    }
    /**
     * @param {?} file
     * @return {?}
     */
    fileLoaded(file) {
        /** @type {?} */
        const fileReader = new FileReader();
        fileReader.onload = (/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const data = (/** @type {?} */ (fileReader.result));
            /** @type {?} */
            const settings = JSON.parse(data).settings;
            /** @type {?} */
            const currentActivePlayer = JSON.parse(data).currentActivePlayer;
            /** @type {?} */
            const currentPlayerMapKeys = JSON.parse(data).currentPlayerMapKeys;
            /** @type {?} */
            const legFinished = JSON.parse(data).legFinished;
            /** @type {?} */
            const gameData = new Map();
            /** @type {?} */
            let throwsDone = 0;
            for (const gameDataObject of JSON.parse(data).gameData) {
                /** @type {?} */
                const gameEntry = new PlayerData();
                gameEntry.currentLeg.scores = [];
                for (const score of gameDataObject.value.currentLeg.scores) {
                    gameEntry.currentLeg.scores.push(score);
                }
                throwsDone += gameEntry.currentLeg.scores.length;
                gameData.set(gameDataObject.key, gameDataObject.value);
            }
            this.dartGameData.throwsDone = throwsDone;
            this.dartGameData.currentActivePlayer = currentActivePlayer;
            this.dartGameData.legFinished = legFinished === 'true';
            this.dartGameData.currentPlayerMapKeys = currentPlayerMapKeys;
            this.dartGameData.gameData = (/** @type {?} */ (gameData));
            this.dartGameData.settings = (/** @type {?} */ (settings));
        });
        fileReader.readAsText(file.target.files[0]);
    }
}
ExportImportDataPanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-export-import-data-panel',
                template: "<div class=\"col-xs-12 config-group\">\n    <button class=\"btn btn-primary col-xs-12 margin-bottom\" *ngIf=\"dartGameData && dartGameData.settings && dartGameData.settings.isGameActive\" (click)=\"saveGame()\">\n      {{'page.dartScoreBoard.game.export' | translate}}\n    </button>\n    <button class=\"btn btn-success col-xs-12\" (click)=\"loadGame()\">\n      {{'page.dartScoreBoard.game.import' | translate}}\n    </button>\n</div>\n<input class=\"btn btn-primary\" type=\"file\" accept=\"application/json\" style=\"display: none\" (change)=\"fileLoaded($event)\"\n       #loadGameButton/>\n",
                styles: [".config-group{padding:.5rem;margin:.5rem;border-radius:5px;background-color:#adadad}.margin-bottom{margin-bottom:.5rem}"]
            }] }
];
/** @nocollapse */
ExportImportDataPanelComponent.ctorParameters = () => [];
ExportImportDataPanelComponent.propDecorators = {
    importGameButton: [{ type: ViewChild, args: ['loadGameButton',] }],
    dartGameData: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ScoreEntry {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const GameModes = {
    FREE_GAME: 0,
    DOUBLE_IN: 1,
    DOUBLE_OUT: 2,
    DOUBLE_IN_AND_OUT: 3,
    TRIPPLE_IN: 4,
    TRIPPLE_OUT: 5,
    TRIPPLE_IN_AND_OUT: 6,
};
GameModes[GameModes.FREE_GAME] = 'FREE_GAME';
GameModes[GameModes.DOUBLE_IN] = 'DOUBLE_IN';
GameModes[GameModes.DOUBLE_OUT] = 'DOUBLE_OUT';
GameModes[GameModes.DOUBLE_IN_AND_OUT] = 'DOUBLE_IN_AND_OUT';
GameModes[GameModes.TRIPPLE_IN] = 'TRIPPLE_IN';
GameModes[GameModes.TRIPPLE_OUT] = 'TRIPPLE_OUT';
GameModes[GameModes.TRIPPLE_IN_AND_OUT] = 'TRIPPLE_IN_AND_OUT';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const ScoreValidator = {
    VALID: 0,
    SINGLE_INVALID: 1,
    SET_INVALID: 2,
};
ScoreValidator[ScoreValidator.VALID] = 'VALID';
ScoreValidator[ScoreValidator.SINGLE_INVALID] = 'SINGLE_INVALID';
ScoreValidator[ScoreValidator.SET_INVALID] = 'SET_INVALID';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ScoreService {
    constructor() { }
    /**
     * @param {?} index
     * @param {?} scores
     * @param {?} requiredScore
     * @return {?}
     */
    getPendingScores(index, scores, requiredScore) {
        /** @type {?} */
        let total = requiredScore;
        if (index > scores.length - 1) {
            index = scores.length - 1;
        }
        for (let i = 0; i <= index; i++) {
            if (scores[i].isValid) {
                total = total - scores[i].total;
            }
        }
        return total;
    }
    /**
     * @param {?} allScores
     * @param {?} currentScore
     * @param {?} gameMode
     * @param {?} requiredScore
     * @return {?}
     */
    isScoreValid(allScores, currentScore, gameMode, requiredScore) {
        /** @type {?} */
        let cummulatedScores = this.getPendingScores(allScores.length - 1, allScores, requiredScore);
        cummulatedScores = cummulatedScores - currentScore.total;
        /** @type {?} */
        const isFirstValidEntry = this.isFirstValidEntry(allScores);
        if ([GameModes.DOUBLE_IN, GameModes.DOUBLE_IN_AND_OUT].indexOf(gameMode) > -1 && isFirstValidEntry) {
            if (currentScore.type === 2 && cummulatedScores >= 0) {
                if (cummulatedScores >= 0) {
                    return ScoreValidator.VALID;
                }
                return ScoreValidator.SET_INVALID;
            }
            return ScoreValidator.SINGLE_INVALID;
        }
        if ([GameModes.TRIPPLE_IN, GameModes.TRIPPLE_IN_AND_OUT].indexOf(gameMode) > -1 && isFirstValidEntry) {
            if (currentScore.type === 3) {
                if (cummulatedScores >= 0) {
                    return ScoreValidator.VALID;
                }
                return ScoreValidator.SET_INVALID;
            }
            return ScoreValidator.SINGLE_INVALID;
        }
        if (cummulatedScores >= 3) {
            return ScoreValidator.VALID;
        }
        if (cummulatedScores >= 2 && [GameModes.DOUBLE_OUT, GameModes.DOUBLE_IN_AND_OUT].indexOf(gameMode) > -1) {
            return ScoreValidator.VALID;
        }
        if (cummulatedScores >= 1 && [GameModes.DOUBLE_IN, GameModes.TRIPPLE_IN, GameModes.FREE_GAME].indexOf(gameMode) > -1) {
            return ScoreValidator.VALID;
        }
        if (cummulatedScores === 0) {
            if ([GameModes.DOUBLE_OUT, GameModes.DOUBLE_IN_AND_OUT].indexOf(gameMode) > -1) {
                if (currentScore.type === 2) {
                    return ScoreValidator.VALID;
                }
                return ScoreValidator.SET_INVALID;
            }
            if ([GameModes.TRIPPLE_OUT, GameModes.TRIPPLE_IN_AND_OUT].indexOf(gameMode) > -1) {
                if (currentScore.type === 3) {
                    return ScoreValidator.VALID;
                }
                return ScoreValidator.SET_INVALID;
            }
            return ScoreValidator.VALID;
        }
        return ScoreValidator.SET_INVALID;
    }
    /**
     * @param {?} scores
     * @return {?}
     */
    isFirstValidEntry(scores) {
        return scores.findIndex((/**
         * @param {?} s
         * @return {?}
         */
        (s) => s.isValid === true)) === -1;
    }
}
ScoreService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ScoreService.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GamePanelComponent {
    /**
     * @param {?} scoreService
     */
    constructor(scoreService) {
        this.scoreService = scoreService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} event
     * @return {?}
     */
    scoreEntered(event) {
        if (this.dartGameData.gameData && this.dartGameData.currentActivePlayer && !this.dartGameData.legFinished) {
            /** @type {?} */
            const currentData = this.dartGameData.gameData.get(this.dartGameData.currentActivePlayer);
            if (currentData.currentLeg && currentData.currentLeg.scores) {
                /** @type {?} */
                const scoreValid = this.scoreService.isScoreValid(currentData.currentLeg.scores, event, (/** @type {?} */ (this.dartGameData.settings.gameMode)), this.dartGameData.settings.requiredScore);
                event.isValid = scoreValid === ScoreValidator.VALID;
                currentData.currentLeg.scores.push(event);
                if (scoreValid === ScoreValidator.SET_INVALID) {
                    this.invalidateSet(scoreValid, currentData);
                }
                if (this.scoreService.getPendingScores(currentData.currentLeg.scores.length - 1, currentData.currentLeg.scores, this.dartGameData.settings.requiredScore) === 0) {
                    currentData.currentLeg.finishedTime = new Date().getTime();
                    currentData.currentLeg.totalThrowNumberInLeg = this.dartGameData.throwsDone;
                    this.selectNextPlayer();
                }
                else {
                    if (currentData.currentLeg.scores.length % 3 === 0) {
                        this.selectNextPlayer();
                    }
                }
                this.dartGameData.throwsDone += 1;
            }
        }
    }
    /**
     * @return {?}
     */
    scoreReverted() {
        if (this.dartGameData.gameData && this.dartGameData.currentActivePlayer) {
            /** @type {?} */
            let currentData = this.dartGameData.gameData.get(this.dartGameData.currentActivePlayer);
            if (currentData.currentLeg && currentData.currentLeg.scores) {
                /** @type {?} */
                const throwsLeftCount = 3 - currentData.currentLeg.scores.length % 3;
                if (throwsLeftCount === 3) {
                    this.selectPreviousNotFinishedPlayer();
                }
                this.checkIfFinished(1);
                currentData = this.dartGameData.gameData.get(this.dartGameData.currentActivePlayer);
                /** @type {?} */
                let toDeletedRows = 0;
                for (let i = currentData.currentLeg.scores.length - 1; i >= 0; i--) {
                    /** @type {?} */
                    const score = currentData.currentLeg.scores[i];
                    toDeletedRows += 1;
                    if (score.type !== 0) {
                        break;
                    }
                }
                currentData.currentLeg.scores.splice(currentData.currentLeg.scores.length - toDeletedRows, toDeletedRows);
                this.dartGameData.throwsDone -= 1;
            }
        }
    }
    /**
     * @return {?}
     */
    startNewGame() {
        this.dartGameData.currentPlayerMapKeys = [];
        /** @type {?} */
        const playerMap = new Map();
        /** @type {?} */
        let firstPlayerAssigned = false;
        for (const player of this.dartGameData.settings.players) {
            playerMap.set(player, new PlayerData());
            if (!firstPlayerAssigned) {
                this.dartGameData.currentActivePlayer = player;
                firstPlayerAssigned = true;
            }
        }
        this.dartGameData.throwsDone = 0;
        this.dartGameData.gameData = playerMap;
        this.dartGameData.legFinished = false;
        this.dartGameData.currentPlayerMapKeys = Array.from(playerMap.keys());
        this.dartGameData.settings.isGameActive = true;
    }
    /**
     * @param {?} player
     * @return {?}
     */
    isPlayerActive(player) {
        if (this.dartGameData.legFinished) {
            return false;
        }
        return this.dartGameData.currentActivePlayer === player;
    }
    /**
     * @return {?}
     */
    getPlayerObject() {
        /** @type {?} */
        const dartCount = 3 - this.dartGameData.gameData.get(this.dartGameData.currentActivePlayer).currentLeg.scores.length % 3;
        return { 'name': this.dartGameData.currentActivePlayer, 'dartCount': dartCount };
    }
    /**
     * @return {?}
     */
    getFirstFinisher() {
        /** @type {?} */
        const finisherArray = [];
        for (const player of this.dartGameData.currentPlayerMapKeys) {
            /** @type {?} */
            const currentData = this.dartGameData.gameData.get(player);
            if (currentData.currentLeg.finishedTime) {
                finisherArray.push({ 'player': player, 'finishTime': currentData.currentLeg.finishedTime });
            }
        }
        if (finisherArray.length === 0) {
            return undefined;
        }
        /** @type {?} */
        let firstFinisher = finisherArray[0];
        for (const finisher of finisherArray) {
            if (finisher.finishTime < firstFinisher.finishTime) {
                firstFinisher = finisher;
            }
        }
        return firstFinisher.player;
    }
    /**
     * @private
     * @param {?} scoreValid
     * @param {?} currentData
     * @return {?}
     */
    invalidateSet(scoreValid, currentData) {
        /** @type {?} */
        let numberOfThrowsDone = currentData.currentLeg.scores.length % 3;
        if (numberOfThrowsDone === 0) {
            numberOfThrowsDone = 3;
        }
        for (let i = currentData.currentLeg.scores.length - 1; i >= currentData.currentLeg.scores.length - numberOfThrowsDone; i--) {
            currentData.currentLeg.scores[i].isValid = false;
        }
        /** @type {?} */
        const throwsLeftCount = 3 - numberOfThrowsDone;
        for (let i = 0; i < throwsLeftCount; i++) {
            /** @type {?} */
            const dummyScore = new ScoreEntry();
            dummyScore.isValid = false;
            dummyScore.type = 0;
            dummyScore.total = 0;
            dummyScore.field = 0;
            currentData.currentLeg.scores.push(dummyScore);
        }
    }
    /**
     * @private
     * @param {?=} iteration
     * @return {?}
     */
    selectPreviousNotFinishedPlayer(iteration) {
        if (!iteration) {
            iteration = 1;
        }
        else {
            iteration += 1;
        }
        /** @type {?} */
        const indexOfActivePlayer = this.dartGameData.settings.players.indexOf(this.dartGameData.currentActivePlayer);
        if (indexOfActivePlayer === 0) {
            this.dartGameData.currentActivePlayer = this.dartGameData.settings.players[this.dartGameData.settings.players.length - 1];
        }
        else {
            this.dartGameData.currentActivePlayer = this.dartGameData.settings.players[indexOfActivePlayer - 1];
        }
        this.checkIfFinished(iteration);
    }
    /**
     * @private
     * @param {?} iteration
     * @return {?}
     */
    checkIfFinished(iteration) {
        /** @type {?} */
        const currentData = this.dartGameData.gameData.get(this.dartGameData.currentActivePlayer);
        if (currentData.currentLeg.finishedTime) {
            if (this.dartGameData.throwsDone - 1 === currentData.currentLeg.totalThrowNumberInLeg) {
                currentData.currentLeg.finishedTime = undefined;
                currentData.currentLeg.totalThrowNumberInLeg = undefined;
                this.dartGameData.legFinished = false;
                this.dartGameData.settings.isGameActive = true;
            }
            else {
                if (iteration <= this.dartGameData.currentPlayerMapKeys.length) {
                    this.selectPreviousNotFinishedPlayer(iteration);
                }
            }
        }
    }
    /**
     * @private
     * @param {?=} iteration
     * @return {?}
     */
    selectNextPlayer(iteration) {
        if (!iteration) {
            iteration = 1;
        }
        else {
            iteration += 1;
        }
        /** @type {?} */
        const indexOfActivePlayer = this.dartGameData.settings.players.indexOf(this.dartGameData.currentActivePlayer);
        if (indexOfActivePlayer === this.dartGameData.settings.players.length - 1) {
            this.dartGameData.currentActivePlayer = this.dartGameData.settings.players[0];
        }
        else {
            this.dartGameData.currentActivePlayer = this.dartGameData.settings.players[indexOfActivePlayer + 1];
        }
        /** @type {?} */
        const newPlayerScores = this.dartGameData.gameData.get(this.dartGameData.currentActivePlayer).currentLeg.scores;
        if (this.scoreService.getPendingScores(newPlayerScores.length - 1, newPlayerScores, this.dartGameData.settings.requiredScore) === 0) {
            if (iteration <= this.dartGameData.currentPlayerMapKeys.length) {
                this.selectNextPlayer(iteration);
            }
            else {
                this.dartGameData.legFinished = true;
                this.dartGameData.settings.isGameActive = false;
            }
        }
    }
}
GamePanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-game-panel',
                template: "<div *ngIf=\"dartGameData\" class=\"col-sm-12 col-xs-12 base-padding\">\n  <div class=\"col-sm-6 no-padding\">\n    <h3 class=\"no-margin\">\n      {{'page.dartScoreBoard.setup.throwInput' | translate}}\n    </h3>\n    <p  [innerHTML]=\"'page.dartScoreBoard.setup.throwInput.hint' | translate\">\n    </p>\n    <app-dart-board [throwsDone]=\"dartGameData.throwsDone\" (scoreEntered)=\"scoreEntered($event)\" (scoreReverted)=\"scoreReverted()\"></app-dart-board>\n  </div>\n  <div class=\"col-sm-6 no-padding no-border\">\n    <div class=\"col-sm-12\">\n      <h3 class=\"no-margin\">\n        {{'page.dartScoreBoard.setup.playerList' | translate}}\n      </h3>\n      <p *ngIf=\"dartGameData.settings.isGameActive\" [innerHTML]=\"'page.dartScoreBoard.setup.playerLis.hint' | translate: getPlayerObject()\">\n      </p>\n    </div>\n    <ng-container *ngIf=\"(dartGameData.settings.isGameActive || dartGameData.legFinished)  && dartGameData.currentPlayerMapKeys\">\n      <div class=\"col-xs-12\" *ngFor=\"let player of dartGameData.currentPlayerMapKeys\">\n        <div class=\"no-padding col-xs-12 {{ isPlayerActive(player) ? 'player-active' : 'player-inactive'}}\">\n          <app-score-panel [playerName]=\"player\" [legData]=\"dartGameData.gameData.get(player).currentLeg\"\n                           [requiredScore]=\"dartGameData.settings.requiredScore\"\n                           [isActive]=\"isPlayerActive(player)\"></app-score-panel>\n        </div>\n      </div>\n    </ng-container>\n  </div>\n  <div class=\"alert-warning col-xs-12 game-over-panel\" *ngIf=\"getFirstFinisher() && !dartGameData.legFinished\">\n    <div [innerHTML]=\"'page.dartScoreBoard.game.winner' | translate: {'player': getFirstFinisher()}\">\n    </div>\n    <div>\n      <button class=\"btn btn-primary margin-top\" (click)=\"startNewGame()\">\n        {{'page.dartScoreBoard.setup.startNewRound' | translate}}\n      </button>\n    </div>\n  </div>\n  <div class=\"alert-success col-xs-12 game-over-panel\" *ngIf=\"dartGameData.legFinished\">\n    <div [innerHTML]=\"'page.dartScoreBoard.game.finished' | translate: {'player': getFirstFinisher()}\">\n    {{'page.dartScoreBoard.game.finished' | translate}}\n    </div>\n    <div>\n      <button class=\"btn btn-primary margin-top\" (click)=\"startNewGame()\">\n        {{'page.dartScoreBoard.setup.startNewRound' | translate}}\n      </button>\n    </div>\n  </div>\n</div>\n",
                styles: [".no-padding{padding:0}.game-over-panel{border-radius:5px;margin-top:1rem;text-align:center;padding:1rem;border:1px solid}.margin-top{margin-top:1rem}.base-padding{padding:5px}"]
            }] }
];
/** @nocollapse */
GamePanelComponent.ctorParameters = () => [
    { type: ScoreService }
];
GamePanelComponent.propDecorators = {
    dartGameData: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GameSettings {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SetupPanelComponent {
    constructor() {
        this.gameStarted = new EventEmitter();
        this.newPlayerName = '';
        this.showGameCancelWarning = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.isCustomizedRequiredScore = false;
        if (this.gameSettings.requiredScore) {
            this.requiredScoreModel = this.gameSettings.requiredScore;
        }
    }
    /**
     * @return {?}
     */
    getGameModes() {
        /** @type {?} */
        const modes = [];
        /** @type {?} */
        const allModes = Object.keys(GameModes.valueOf());
        for (const mode of allModes.slice(0, allModes.length / 2)) {
            modes.push(parseInt(mode, 10));
        }
        return modes;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    getGameModeValue(key) {
        return GameModes.valueOf()[key];
    }
    /**
     * @return {?}
     */
    getConvertedRequiredScore() {
        if (this.isCustomizedRequiredScore) {
            return -1;
        }
        return this.gameSettings.requiredScore;
    }
    /**
     * @param {?} score
     * @return {?}
     */
    setRequiredScore(score) {
        if (this.gameSettings.isGameActive) {
            return;
        }
        this.gameSettings.requiredScore = score;
        this.requiredScoreModel = score;
    }
    /**
     * @param {?} mode
     * @return {?}
     */
    setGameMode(mode) {
        if (this.gameSettings.isGameActive) {
            return;
        }
        this.gameSettings.gameMode = mode;
    }
    /**
     * @return {?}
     */
    doesPlayerExists() {
        return this.gameSettings.players.indexOf(this.newPlayerName.trim()) > -1;
    }
    /**
     * @return {?}
     */
    addNewPlayer() {
        if (this.gameSettings.isGameActive) {
            return;
        }
        if (this.newPlayerName.trim() !== '' && !this.doesPlayerExists()) {
            this.gameSettings.players.push(this.newPlayerName);
            this.newPlayerName = '';
        }
    }
    /**
     * @param {?} name
     * @return {?}
     */
    removePlayer(name) {
        if (this.gameSettings.isGameActive) {
            return;
        }
        if (name && name.trim() !== '') {
            /** @type {?} */
            const index = this.gameSettings.players.indexOf(name);
            if (index > -1) {
                this.gameSettings.players.splice(index, 1);
            }
        }
    }
    /**
     * @return {?}
     */
    isGameReady() {
        return this.gameSettings &&
            this.gameSettings.requiredScore > 0 &&
            this.gameSettings.players.length > 0 &&
            this.gameSettings.gameMode > -1;
    }
    /**
     * @return {?}
     */
    startGame() {
        if (this.gameSettings.isGameActive) {
            return;
        }
        if (this.isGameReady()) {
            this.gameStarted.emit();
        }
    }
    /**
     * @return {?}
     */
    getGameCancelWarningClass() {
        return this.showGameCancelWarning ? 'display-warning' : 'hide-warning';
    }
    /**
     * @return {?}
     */
    cancelGame() {
        this.showGameCancelWarning = false;
        this.gameSettings.isGameActive = false;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    drop(event) {
        if (this.gameSettings.isGameActive) {
            return;
        }
        moveItemInArray(this.gameSettings.players, event.previousIndex, event.currentIndex);
    }
}
SetupPanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-setup-panel',
                template: "<div class=\"base-padding\">\r\n  <h3>\r\n    {{'page.dartScoreBoard.setup.title' | translate}}\r\n  </h3>\r\n</div>\r\n<div class=\"setup-panel\">\r\n  <div class=\"game-running-container width-100\" *ngIf=\"gameSettings.isGameActive\">\r\n    <div class=\"width-100 game-running-hint no-margin-bottom\" *ngIf=\"!showGameCancelWarning\">\r\n      <div class=\"message-container alert-warning\">\r\n        {{'page.dartScoreBoard.setup.gameInProgress.hint' | translate}}\r\n        <button class=\"btn btn-danger warning-button-styling\" (click)=\"showGameCancelWarning = true\">\r\n          {{'page.dartScoreBoard.setup.gameInProgress.cancelQuestion' | translate}}\r\n        </button>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"width-100 game-cancel-question alert alert-danger no-margin-bottom\" *ngIf=\"showGameCancelWarning\">\r\n      <div class=\"message-container alert-danger\">\r\n        {{'page.dartScoreBoard.setup.cancelGame.hint' | translate}}\r\n        <button class=\"btn btn-success warning-button-styling\" (click)=\"showGameCancelWarning = false;\">\r\n          {{'page.dartScoreBoard.setup.cancelGame.cancel' | translate}}\r\n        </button>\r\n        <button class=\"btn btn-danger warning-button-styling\" (click)=\"cancelGame()\">\r\n          {{'page.dartScoreBoard.setup.cancelGame.confirm' | translate}}\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div class=\"clearfix\"></div>\r\n  </div>\r\n  <div class=\"col-sm-6 no-padding\">\r\n    <div class=\"config-group radio-button-group\">\r\n      <h4>\r\n        {{'page.dartScoreBoard.setup.gameMode' | translate}}\r\n      </h4>\r\n      <div *ngFor=\"let gameMode of getGameModes()\">\r\n        <div class=\"width-100\" (click)=\"setGameMode(gameMode)\">\r\n          <input type=\"radio\" [value]=\"gameMode\" name=\"gameMode\" [(ngModel)]=\"gameSettings.gameMode\">\r\n          {{'page.dartScoreBoard.setup.gameMode.' + getGameModeValue(gameMode) | translate}}\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-sm-6 no-padding\">\r\n    <div class=\"config-group radio-button-group\">\r\n      <h4>\r\n        {{'page.dartScoreBoard.setup.requiredScore' | translate}}\r\n      </h4>\r\n\r\n      <div class=\"width-100\" (click)=\"isCustomizedRequiredScore = false; setRequiredScore(901)\">\r\n        <input type=\"radio\" [value]=\"901\" name=\"requiredScore\" [ngModel]=\"getConvertedRequiredScore()\"> 901\r\n      </div>\r\n      <div class=\"width-100\" (click)=\"isCustomizedRequiredScore = false; setRequiredScore(701)\">\r\n        <input type=\"radio\" [value]=\"701\" name=\"requiredScore\" [ngModel]=\"getConvertedRequiredScore()\"> 701\r\n      </div>\r\n      <div class=\"width-100\" (click)=\"isCustomizedRequiredScore = false; setRequiredScore(501)\">\r\n        <input type=\"radio\" [value]=\"501\" name=\"requiredScore\" [ngModel]=\"getConvertedRequiredScore()\"> 501\r\n      </div>\r\n      <div class=\"width-100\" (click)=\"isCustomizedRequiredScore = false; setRequiredScore(301)\">\r\n        <input type=\"radio\" [value]=\"301\" name=\"requiredScore\" [ngModel]=\"getConvertedRequiredScore()\"> 301\r\n      </div>\r\n      <div class=\"width-100\" (click)=\"isCustomizedRequiredScore = true;\">\r\n        <input type=\"radio\" [value]=\"true\" name=\"requiredScore\" [(ngModel)]=\"isCustomizedRequiredScore\">\r\n        {{'page.dartScoreBoard.setup.settings.customized' | translate}}\r\n        <input *ngIf=\"isCustomizedRequiredScore\" class=\"custom-input\" type=\"number\" name=\"requiredScoreInput\"\r\n               [(ngModel)]=\"gameSettings.requiredScore\" [min]=\"101\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-sm-12 no-padding\">\r\n    <div class=\"config-group\">\r\n      <h4>\r\n        {{'page.dartScoreBoard.setup.configure.players' | translate}}\r\n      </h4>\r\n      <hr>\r\n      <h5>\r\n        {{'page.dartScoreBoard.setup.player.add.title' | translate}}\r\n      </h5>\r\n      <button class=\"btn btn-primary add-player-button\"\r\n              [disabled]=\"!newPlayerName || newPlayerName.trim() === '' || doesPlayerExists()\"\r\n              (click)=\"addNewPlayer()\">{{'page.dartScoreBoard.setup.player.add' | translate}}\r\n      </button>\r\n      <input class=\"player-input form-control\" type=\"text\" [(ngModel)]=\"newPlayerName\"\r\n             placeholder=\"{{'page.dartScoreBoard.setup.player.add.placeholder' | translate}}\">\r\n      <p class=\"alert alert-warning no-margin-bottom player-double-alert\" *ngIf=\"doesPlayerExists()\">\r\n        {{'page.dartScoreBoard.setup.playerExists.hint' | translate}}\r\n      </p>\r\n      <div class=\"clearfix\"></div>\r\n      <hr>\r\n      <h5>\r\n        {{'page.dartScoreBoard.setup.player.order.title' | translate}}\r\n      </h5>\r\n      <div cdkDropList *ngIf=\"gameSettings.players && gameSettings.players.length > 0; else showNoPlayersHint\"\r\n           class=\"example-list\" (cdkDropListDropped)=\"drop($event)\">\r\n        <button class=\"btn btn-primary player-display\" *ngFor=\"let player of gameSettings.players\" cdkDrag>\r\n          <img class=\"drag-and-drop-icon\" (click)=\"removePlayer(player)\"\r\n               src=\"/assets/pictures/tools/dart-score-board/drag-and-drop.svg\">\r\n          {{player}}\r\n          <img class=\"delete-icon\" (click)=\"removePlayer(player)\" src=\"/assets/pictures/tools/dart-score-board/trashbin.svg\">\r\n        </button>\r\n      </div>\r\n\r\n      <ng-template #showNoPlayersHint>\r\n        <div class=\"width-100 alert alert-danger no-margin-bottom\">\r\n          {{'page.dartScoreBoard.setup.players.notFound' | translate}}\r\n        </div>\r\n      </ng-template>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-sm-12 no-padding\">\r\n    <div class=\"config-group\">\r\n      <button class=\"btn btn-success width-100\" [disabled]=\"!isGameReady()\" (click)=\"startGame()\">\r\n        {{'page.dartScoreBoard.setup.startGame' | translate}}\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div class=\"clearfix\"></div>\r\n</div>\r\n",
                styles: [".setup-panel{position:relative}.config-group{padding:.5rem;margin:.5rem;border-radius:5px;background-color:#adadad}.radio-button-group{height:21rem}.custom-input{margin-left:.5rem;height:18px;width:50px}.width-100{width:100%}.minimal-advantage{margin-top:1rem}.no-padding{padding:0}.player-display{padding:.5rem;border-radius:5px;margin-bottom:.5rem;text-align:center;width:100%}.add-player-button{width:38%;float:right;margin-bottom:.5rem}.player-input{max-width:60%;margin-right:2%}.player-double-alert{margin-top:.5rem}.clearfix{clear:both}.delete-icon{width:20px;float:right}.drag-and-drop-icon{width:20px;float:left}.no-margin-bottom{margin-bottom:0}.game-running-container{position:absolute;width:100%;height:100%;top:0;left:0;right:0;bottom:0}.game-cancel-question,.game-running-hint{position:absolute;height:100%;background-color:rgba(0,0,0,.7);text-align:center;z-index:2}.warning-button-styling{margin-left:1rem}.message-container{bottom:1rem;position:absolute;left:1rem;right:1rem;padding:1rem;border-radius:5px}.base-padding{padding-left:5px}"]
            }] }
];
/** @nocollapse */
SetupPanelComponent.ctorParameters = () => [];
SetupPanelComponent.propDecorators = {
    gameSettings: [{ type: Input }],
    gameStarted: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ScorePanelComponent {
    /**
     * @param {?} scoreService
     */
    constructor(scoreService) {
        this.scoreService = scoreService;
        this.displayDetails = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.displayDetails = this.isActive;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.isActive) {
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.displayDetails = this.isActive;
                this.scrollToScoreBottom();
            }), 1000);
        }
    }
    /**
     * @param {?} index
     * @return {?}
     */
    getPendingScores(index) {
        return this.scoreService.getPendingScores(index, this.legData.scores, this.requiredScore);
    }
    /**
     * @param {?} score
     * @return {?}
     */
    getScoreDisplay(score) {
        if (score <= 0) {
            return '00';
        }
        if (score < 10) {
            return '0' + score;
        }
        return score;
    }
    /**
     * @return {?}
     */
    get3DartAverage() {
        /** @type {?} */
        const numberOfCompleteSets = Math.floor(this.legData.scores.length / 3);
        if (numberOfCompleteSets <= 0) {
            return '(--)';
        }
        /** @type {?} */
        const score = this.getPendingScores(numberOfCompleteSets * 3 - 1);
        return (this.requiredScore - score) / numberOfCompleteSets;
    }
    /**
     * @return {?}
     */
    getSingleDartAverage() {
        if (this.legData.scores.length === 0) {
            return '(--)';
        }
        /** @type {?} */
        const score = this.getPendingScores(this.legData.scores.length - 1);
        return (this.requiredScore - score) / (this.legData.scores.length);
    }
    /**
     * @return {?}
     */
    triggerDisplayDetails() {
        this.displayDetails = !this.displayDetails;
        this.scrollToScoreBottom();
    }
    /**
     * @return {?}
     */
    scrollToScoreBottom() {
        this.scoreEntryPanel.nativeElement.scrollTop = this.scoreEntryPanel.nativeElement.scrollHeight;
    }
}
ScorePanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-score-panel',
                template: "<div class=\"no-border no-padding relative col-xs-12 {{ isActive ? 'player-active' : 'player-inactive'}}\" *ngIf=\"legData\">\n  <div class=\"winning-border alert-success\" *ngIf=\"legData.finishedTime\"></div>\n  <div class=\"score-panel\">\n    <div class=\"arrow-container\" *ngIf=\"isActive\">\n    </div>\n    <div class=\"player-name col-xs-8 text-left\">\n      <strong>{{playerName}}</strong>\n    </div>\n    <div class=\"player-score col-xs-4 text-right\">\n      <strong>{{getPendingScores(legData.scores.length - 1)}}</strong>\n    </div>\n    <div class=\"player-number-of-darts col-xs-6 text-left\" (click)=\"triggerDisplayDetails()\">\n      <ng-container *ngIf=\"!displayDetails\">\n        <img src=\"./assets/pictures/tools/dart-score-board/details.svg\"\n             class=\"menu-icon-{{isActive ? 'active' : 'inactive'}} upside-down\">\n      </ng-container>\n      <ng-container *ngIf=\"displayDetails\">\n        <img src=\"./assets/pictures/tools/dart-score-board/details.svg\"\n             class=\"menu-icon-{{isActive ? 'active' : 'inactive'}}\">\n      </ng-container>\n      {{'page.dartScoreBoard.score.details' | translate}}\n    </div>\n    <div class=\"player-number-of-darts col-xs-6 text-right\">\n      {{'page.dartScoreBoard.score.numberOfDarts' | translate}}: {{legData.scores.length}}\n    </div>\n    <div class=\"player-details-{{displayDetails  ? 'show' : 'hidden'}} col-xs-12 no-padding fixed-font-height\">\n      <hr>\n      <div class=\"col-xs-7 no-padding text-center\">\n        <h4>\n          {{'page.dartScoreBoard.score.details.stats' | translate}}\n        </h4>\n        <hr>\n        <div class=\"col-xs-9 no-padding text-left\">\n          <h5>\n            {{'page.dartScoreBoard.score.details.average' | translate}}:\n          </h5>\n        </div>\n        <div class=\"col-xs-3 no-padding text-right\">\n          <h5>\n            <ng-container *ngIf=\"get3DartAverage() !== '(--)'\">\n              <strong>{{get3DartAverage() | number : '.1'}}</strong>\n            </ng-container>\n            <ng-container *ngIf=\"get3DartAverage() === '(--)'\">\n              <strong>{{get3DartAverage()}}</strong>\n            </ng-container>\n          </h5>\n        </div>\n        <div class=\"col-xs-9 no-padding text-left\">\n          <h5>\n            {{'page.dartScoreBoard.score.details.dartAverage' | translate}}:\n          </h5>\n        </div>\n        <div class=\"col-xs-3 no-padding text-right\">\n          <h5>\n            <ng-container *ngIf=\"getSingleDartAverage() !== '(--)'\">\n              <strong>{{getSingleDartAverage() | number : '.1'}}</strong>\n            </ng-container>\n            <ng-container *ngIf=\"getSingleDartAverage() === '(--)'\">\n              <strong>{{getSingleDartAverage()}}</strong>\n            </ng-container>\n          </h5>\n        </div>\n      </div>\n      <div class=\"col-xs-4 right no-padding text-center\">\n        <h4>\n          {{'page.dartScoreBoard.score.details.throws' | translate}}\n        </h4>\n        <hr>\n        <div class=\"score-entry-panel\" #scoreEntryPanel>\n          <div class=\"score-entry\" *ngFor=\"let score of legData.scores; let i = index\">\n            <div\n              class=\"col-xs-12 no-padding {{!score.isValid ? 'alert-danger' : ''}} {{getPendingScores(i) === 0 ? 'alert-success': ''}}\">\n              <div class=\"col-xs-6 text-right no-padding\"><strong>{{getPendingScores(i)}}</strong></div>\n              <div class=\"col-xs-6 text-right no-padding\">({{getScoreDisplay(score.total)}})</div>\n            </div>\n          </div>\n          <div id=\"score-bottom-{{playerName}}\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n",
                styles: ["hr{margin:0;color:#000}.text-right{text-align:right}.text-left{text-align:left}.score-panel{padding:.5rem}.relative{position:relative}.score-entry-panel{height:11rem!important;overflow-y:scroll}.overflow-hidden{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.player-details-show{height:16rem;overflow-y:hidden;transition:.5s}.player-details-hidden{height:0;padding-top:0;overflow-y:hidden;transition:.5s}.fixed-font-height{font-size:16px}.text-center{text-align:center}.fixed{position:fixed;top:0}.arrow-container{position:absolute;left:0;width:0;top:0;height:0;border-style:solid;border-width:34px 0 34px 12px;border-color:transparent transparent transparent #00f}.menu-icon-inactive{-webkit-transform:rotate(90deg);transform:rotate(90deg);width:16px;margin-top:-2px;margin-right:.5rem}.menu-icon-active{-webkit-transform:rotate(90deg);transform:rotate(90deg);width:24px;margin-top:-5px;margin-right:.5rem}.upside-down{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.winning-border{position:absolute;top:0;right:0;left:0;bottom:0}.no-padding{padding:0}.no-margin{margin:0}.player-active{font-size:24px;border:2px solid #00f;border-radius:5px;margin-bottom:.5rem}.player-inactive{border-radius:5px;border:2px solid #e0e0e0;margin-bottom:.5rem}.right{float:right}"]
            }] }
];
/** @nocollapse */
ScorePanelComponent.ctorParameters = () => [
    { type: ScoreService }
];
ScorePanelComponent.propDecorators = {
    legData: [{ type: Input }],
    playerName: [{ type: Input }],
    requiredScore: [{ type: Input }],
    isActive: [{ type: Input }],
    scoreEntryPanel: [{ type: ViewChild, args: ['scoreEntryPanel',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DartBoardComponent {
    constructor() {
        this.scoreEntered = new EventEmitter();
        this.scoreReverted = new EventEmitter();
        this.throwsDone = 0;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} type
     * @param {?} field
     * @return {?}
     */
    score(type, field) {
        /** @type {?} */
        const scoreObject = new ScoreEntry();
        scoreObject.field = field;
        scoreObject.type = type;
        scoreObject.total = type * field;
        scoreObject.isValid = true;
        this.scoreEntered.emit(scoreObject);
    }
    /**
     * @return {?}
     */
    revertScore() {
        this.scoreReverted.emit();
    }
}
DartBoardComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-dart-board',
                template: "<div class=\"board-container panel\">\n  <!-- Reference https://www.1001freedownloads.com/free-clipart/dartboard -->\n  <svg id=\"dartboard-panel\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"-250 -250 500 500\" xml:space=\"preserve\">\n    <defs id=\"defs6\">\n      <line id=\"refwire\" y2=\"167.4\" y1=\"16.2\" stroke=\"#c0c0c0\" x2=\"26.52\" x1=\"2.566\"></line>\n      <path id=\"SLICE\" stroke-width=\"0\" d=\"m0 0l15.64 98.77c-10.362 1.64-20.918 1.64-31.28 0l15.64-98.77z\"></path>\n      <use id=\"double\" xlink:href=\"#SLICE\" transform=\"scale(1.695)\" height=\"500\" width=\"500\" y=\"0\" x=\"0\"></use>\n      <use id=\"outer\" xlink:href=\"#SLICE\" transform=\"scale(1.605)\" height=\"500\" width=\"500\" y=\"0\" x=\"0\"></use>\n      <use id=\"triple\" xlink:href=\"#SLICE\" transform=\"scale(1.065)\" height=\"500\" width=\"500\" y=\"0\" x=\"0\"></use>\n      <use id=\"inner\" xlink:href=\"#SLICE\" transform=\"scale(.975)\" height=\"500\" width=\"500\" y=\"0\" x=\"0\"></use>\n    </defs>\n    <g id=\"board-container-panel\"  transform=\"matrix(1.104 0 0 -1.104 -1.3036 -.48743)\">\n      <circle id=\"outer-ring\" (click)=\"score(1, 0)\" cy=\"0\" cx=\"0\" r=\"226\"></circle>\n      <g id=\"dartboard\">\n        <g id=\"field-20\">\n          <use id=\"double-20\" (click)=\"score(2, 20)\" xlink:href=\"#double\" height=\"500\" width=\"500\" y=\"0\" x=\"0\" fill=\"#ff0000\"></use>\n          <use id=\"single-o-20\" (click)=\"score(1, 20)\" xlink:href=\"#outer\" height=\"500\" width=\"500\" y=\"0\" x=\"0\" fill=\"#000000\"></use>\n          <use id=\"tripple-o-20\" (click)=\"score(3, 20)\" xlink:href=\"#triple\" height=\"500\" width=\"500\" y=\"0\" x=\"0\" fill=\"#ff0000\"></use>\n          <use id=\"single-i-20\" (click)=\"score(1, 20)\" xlink:href=\"#inner\" height=\"500\" width=\"500\" y=\"0\" x=\"0\" fill=\"#000000\"></use>\n        </g>\n        <g id=\"field-5\" transform=\"rotate(18)\">\n          <use id=\"double-5\" (click)=\"score(2, 5)\" xlink:href=\"#double\" height=\"500\" width=\"500\" y=\"0\" x=\"0\" fill=\"#008000\"></use>\n          <use id=\"single-o-5\" (click)=\"score(1, 5)\" xlink:href=\"#outer\" height=\"500\" width=\"500\" y=\"0\" x=\"0\" fill=\"#ffffff\"></use>\n          <use id=\"tripple-5\" (click)=\"score(3, 5)\" xlink:href=\"#triple\" height=\"500\" width=\"500\" y=\"0\" x=\"0\" fill=\"#008000\"></use>\n          <use id=\"single-i-5\" (click)=\"score(1, 5)\" xlink:href=\"#inner\" height=\"500\" width=\"500\" y=\"0\" x=\"0\" fill=\"#ffffff\"></use>\n        </g>\n        <g id=\"field-12\" transform=\"rotate(36)\">\n          <use id=\"double-12\" (click)=\"score(2, 12)\" xlink:href=\"#double\" height=\"500\" width=\"500\" y=\"0\" x=\"0\" fill=\"#ff0000\"></use>\n          <use id=\"single-o-12\" (click)=\"score(1, 12)\" xlink:href=\"#outer\" height=\"500\" width=\"500\" y=\"0\" x=\"0\" fill=\"#000000\"></use>\n          <use id=\"tripple-o-12\" (click)=\"score(3, 12)\" xlink:href=\"#triple\" height=\"500\" width=\"500\" y=\"0\" x=\"0\" fill=\"#ff0000\"></use>\n          <use id=\"single-i-12\" (click)=\"score(1, 12)\" xlink:href=\"#inner\" height=\"500\" width=\"500\" y=\"0\" x=\"0\" fill=\"#000000\"></use>\n        </g>\n        <g id=\"field-9\" transform=\"rotate(54)\">\n          <use id=\"double-9\" (click)=\"score(2, 9)\" xlink:href=\"#double\" height=\"500\" width=\"500\" y=\"0\" x=\"0\" fill=\"#008000\"></use>\n          <use id=\"single-o-9\" (click)=\"score(1, 9)\" xlink:href=\"#outer\" height=\"500\" width=\"500\" y=\"0\" x=\"0\" fill=\"#ffffff\"></use>\n          <use id=\"tripple-9\" (click)=\"score(3, 9)\" xlink:href=\"#triple\" height=\"500\" width=\"500\" y=\"0\" x=\"0\" fill=\"#008000\"></use>\n          <use id=\"single-i-9\" (click)=\"score(1, 9)\" xlink:href=\"#inner\" height=\"500\" width=\"500\" y=\"0\" x=\"0\" fill=\"#ffffff\"></use>\n        </g>\n        <g id=\"field-14\" transform=\"rotate(72.001)\">\n          <use id=\"double-14\" (click)=\"score(2, 14)\" xlink:href=\"#double\" height=\"500\" width=\"500\" y=\"0\" x=\"0\" fill=\"#ff0000\"></use>\n          <use id=\"single-o-14\" (click)=\"score(1, 14)\" xlink:href=\"#outer\" height=\"500\" width=\"500\" y=\"0\" x=\"0\" fill=\"#000000\"></use>\n          <use id=\"tripple-o-14\" (click)=\"score(3, 14)\" xlink:href=\"#triple\" height=\"500\" width=\"500\" y=\"0\" x=\"0\" fill=\"#ff0000\"></use>\n          <use id=\"single-i-14\" (click)=\"score(1, 14)\" xlink:href=\"#inner\" height=\"500\" width=\"500\" y=\"0\" x=\"0\" fill=\"#000000\"></use>\n        </g>\n        <g id=\"field-11\" transform=\"rotate(90)\">\n          <use id=\"double-11\" (click)=\"score(2, 11)\" xlink:href=\"#double\" height=\"500\" width=\"500\" y=\"0\" x=\"0\" fill=\"#008000\"></use>\n          <use id=\"single-o-11\" (click)=\"score(1, 11)\" xlink:href=\"#outer\" height=\"500\" width=\"500\" y=\"0\" x=\"0\" fill=\"#ffffff\"></use>\n          <use id=\"tripple-11\" (click)=\"score(3, 11)\" xlink:href=\"#triple\" height=\"500\" width=\"500\" y=\"0\" x=\"0\" fill=\"#008000\"></use>\n          <use id=\"single-i-11\" (click)=\"score(1, 11)\" xlink:href=\"#inner\" height=\"500\" width=\"500\" y=\"0\" x=\"0\" fill=\"#ffffff\"></use>\n        </g>\n        <g id=\"field-8\" transform=\"rotate(108)\">\n          <use id=\"double-8\" (click)=\"score(2, 8)\" xlink:href=\"#double\" height=\"500\" width=\"500\" y=\"0\" x=\"0\" fill=\"#ff0000\"></use>\n          <use id=\"single-o-8\" (click)=\"score(1, 8)\" xlink:href=\"#outer\" height=\"500\" width=\"500\" y=\"0\" x=\"0\" fill=\"#000000\"></use>\n          <use id=\"tripple-o-8\" (click)=\"score(3, 8)\" xlink:href=\"#triple\" height=\"500\" width=\"500\" y=\"0\" x=\"0\" fill=\"#ff0000\"></use>\n          <use id=\"single-i-8\" (click)=\"score(1, 8)\" xlink:href=\"#inner\" height=\"500\" width=\"500\" y=\"0\" x=\"0\" fill=\"#000000\"></use>\n        </g>\n        <g id=\"field-16\" transform=\"rotate(126)\">\n          <use id=\"double-16\" (click)=\"score(2, 16)\" xlink:href=\"#double\" height=\"500\" width=\"500\" y=\"0\" x=\"0\" fill=\"#008000\"></use>\n          <use id=\"single-o-16\" (click)=\"score(1, 16)\" xlink:href=\"#outer\" height=\"500\" width=\"500\" y=\"0\" x=\"0\" fill=\"#ffffff\"></use>\n          <use id=\"tripple-16\" (click)=\"score(3, 16)\" xlink:href=\"#triple\" height=\"500\" width=\"500\" y=\"0\" x=\"0\" fill=\"#008000\"></use>\n          <use id=\"single-i-16\" (click)=\"score(1, 16)\" xlink:href=\"#inner\" height=\"500\" width=\"500\" y=\"0\" x=\"0\" fill=\"#ffffff\"></use>\n        </g>\n        <g id=\"field-7\" transform=\"rotate(144)\">\n          <use id=\"double-7\" (click)=\"score(2, 7)\" xlink:href=\"#double\" height=\"500\" width=\"500\" y=\"0\" x=\"0\" fill=\"#ff0000\"></use>\n          <use id=\"single-o-7\" (click)=\"score(1, 7)\" xlink:href=\"#outer\" height=\"500\" width=\"500\" y=\"0\" x=\"0\" fill=\"#000000\"></use>\n          <use id=\"tripple-o-7\" (click)=\"score(3, 7)\" xlink:href=\"#triple\" height=\"500\" width=\"500\" y=\"0\" x=\"0\" fill=\"#ff0000\"></use>\n          <use id=\"single-i-7\" (click)=\"score(1, 7)\" xlink:href=\"#inner\" height=\"500\" width=\"500\" y=\"0\" x=\"0\" fill=\"#000000\"></use>\n        </g>\n        <g id=\"field-19\" transform=\"rotate(162)\">\n          <use id=\"double-19\" (click)=\"score(2, 19)\" xlink:href=\"#double\" height=\"500\" width=\"500\" y=\"0\" x=\"0\" fill=\"#008000\"></use>\n          <use id=\"single-o-19\" (click)=\"score(1, 19)\" xlink:href=\"#outer\" height=\"500\" width=\"500\" y=\"0\" x=\"0\" fill=\"#ffffff\"></use>\n          <use id=\"tripple-19\" (click)=\"score(3, 19)\" xlink:href=\"#triple\" height=\"500\" width=\"500\" y=\"0\" x=\"0\" fill=\"#008000\"></use>\n          <use id=\"single-i-19\" (click)=\"score(1, 19)\" xlink:href=\"#inner\" height=\"500\" width=\"500\" y=\"0\" x=\"0\" fill=\"#ffffff\"></use>\n        </g>\n        <g id=\"field-3\" transform=\"scale(-1)\">\n          <use id=\"double-3\" (click)=\"score(2, 3)\" xlink:href=\"#double\" height=\"500\" width=\"500\" y=\"0\" x=\"0\" fill=\"#ff0000\"></use>\n          <use id=\"single-o-3\" (click)=\"score(1, 3)\" xlink:href=\"#outer\" height=\"500\" width=\"500\" y=\"0\" x=\"0\" fill=\"#000000\"></use>\n          <use id=\"tripple-o-3\" (click)=\"score(3, 3)\" xlink:href=\"#triple\" height=\"500\" width=\"500\" y=\"0\" x=\"0\" fill=\"#ff0000\"></use>\n          <use id=\"single-i-3\" (click)=\"score(1, 3)\" xlink:href=\"#inner\" height=\"500\" width=\"500\" y=\"0\" x=\"0\" fill=\"#000000\"></use>\n        </g>\n        <g id=\"field-17\" transform=\"rotate(198)\">\n          <use id=\"double-17\" (click)=\"score(2, 17)\" xlink:href=\"#double\" height=\"500\" width=\"500\" y=\"0\" x=\"0\" fill=\"#008000\"></use>\n          <use id=\"single-o-17\" (click)=\"score(1, 17)\" xlink:href=\"#outer\" height=\"500\" width=\"500\" y=\"0\" x=\"0\" fill=\"#ffffff\"></use>\n          <use id=\"tripple-17\" (click)=\"score(3, 17)\" xlink:href=\"#triple\" height=\"500\" width=\"500\" y=\"0\" x=\"0\" fill=\"#008000\"></use>\n          <use id=\"single-i-17\" (click)=\"score(1, 17)\" xlink:href=\"#inner\" height=\"500\" width=\"500\" y=\"0\" x=\"0\" fill=\"#ffffff\"></use>\n        </g>\n        <g id=\"field-2\" transform=\"rotate(216)\">\n          <use id=\"double-2\" (click)=\"score(2, 2)\" xlink:href=\"#double\" height=\"500\" width=\"500\" y=\"0\" x=\"0\" fill=\"#ff0000\"></use>\n          <use id=\"single-o-2\" (click)=\"score(1, 2)\" xlink:href=\"#outer\" height=\"500\" width=\"500\" y=\"0\" x=\"0\" fill=\"#000000\"></use>\n          <use id=\"tripple-o-2\" (click)=\"score(3, 2)\" xlink:href=\"#triple\" height=\"500\" width=\"500\" y=\"0\" x=\"0\" fill=\"#ff0000\"></use>\n          <use id=\"single-i-2\" (click)=\"score(1, 2)\" xlink:href=\"#inner\" height=\"500\" width=\"500\" y=\"0\" x=\"0\" fill=\"#000000\"></use>\n        </g>\n        <g id=\"field-15\" transform=\"rotate(234)\">\n          <use id=\"double-15\" (click)=\"score(2, 15)\" xlink:href=\"#double\" height=\"500\" width=\"500\" y=\"0\" x=\"0\" fill=\"#008000\"></use>\n          <use id=\"single-o-15\" (click)=\"score(1, 15)\" xlink:href=\"#outer\" height=\"500\" width=\"500\" y=\"0\" x=\"0\" fill=\"#ffffff\"></use>\n          <use id=\"tripple-15\" (click)=\"score(3, 15)\" xlink:href=\"#triple\" height=\"500\" width=\"500\" y=\"0\" x=\"0\" fill=\"#008000\"></use>\n          <use id=\"single-i-15\" (click)=\"score(1, 15)\" xlink:href=\"#inner\" height=\"500\" width=\"500\" y=\"0\" x=\"0\" fill=\"#ffffff\"></use>\n        </g>\n        <g id=\"field-10\" transform=\"rotate(252)\">\n          <use id=\"double-10\" (click)=\"score(2, 10)\" xlink:href=\"#double\" height=\"500\" width=\"500\" y=\"0\" x=\"0\" fill=\"#ff0000\"></use>\n          <use id=\"single-o-10\" (click)=\"score(1, 10)\" xlink:href=\"#outer\" height=\"500\" width=\"500\" y=\"0\" x=\"0\" fill=\"#000000\"></use>\n          <use id=\"tripple-o-10\" (click)=\"score(3, 10)\" xlink:href=\"#triple\" height=\"500\" width=\"500\" y=\"0\" x=\"0\" fill=\"#ff0000\"></use>\n          <use id=\"single-i-10\" (click)=\"score(1, 10)\" xlink:href=\"#inner\" height=\"500\" width=\"500\" y=\"0\" x=\"0\" fill=\"#000000\"></use>\n        </g>\n        <g id=\"field-6\" transform=\"rotate(-90)\">\n          <use id=\"double-6\" (click)=\"score(2, 6)\" xlink:href=\"#double\" height=\"500\" width=\"500\" y=\"0\" x=\"0\" fill=\"#008000\"></use>\n          <use id=\"single-o-6\" (click)=\"score(1, 6)\" xlink:href=\"#outer\" height=\"500\" width=\"500\" y=\"0\" x=\"0\" fill=\"#ffffff\"></use>\n          <use id=\"tripple-6\" (click)=\"score(3, 6)\" xlink:href=\"#triple\" height=\"500\" width=\"500\" y=\"0\" x=\"0\" fill=\"#008000\"></use>\n          <use id=\"single-i-6\" (click)=\"score(1, 6)\" xlink:href=\"#inner\" height=\"500\" width=\"500\" y=\"0\" x=\"0\" fill=\"#ffffff\"></use>\n        </g>\n        <g id=\"field-13\" transform=\"rotate(-72.001)\">\n          <use id=\"double-13\" (click)=\"score(2, 13)\" xlink:href=\"#double\" height=\"500\" width=\"500\" y=\"0\" x=\"0\" fill=\"#ff0000\"></use>\n          <use id=\"single-o-13\" (click)=\"score(1, 13)\" xlink:href=\"#outer\" height=\"500\" width=\"500\" y=\"0\" x=\"0\" fill=\"#000000\"></use>\n          <use id=\"tripple-o-13\" (click)=\"score(3, 13)\" xlink:href=\"#triple\" height=\"500\" width=\"500\" y=\"0\" x=\"0\" fill=\"#ff0000\"></use>\n          <use id=\"single-i-13\" (click)=\"score(1, 13)\" xlink:href=\"#inner\" height=\"500\" width=\"500\" y=\"0\" x=\"0\" fill=\"#000000\"></use>\n        </g>\n        <g id=\"field-4\" transform=\"rotate(-54)\">\n          <use id=\"double-4\" (click)=\"score(2, 4)\" xlink:href=\"#double\" height=\"500\" width=\"500\" y=\"0\" x=\"0\" fill=\"#008000\"></use>\n          <use id=\"single-o-4\" (click)=\"score(1, 4)\" xlink:href=\"#outer\" height=\"500\" width=\"500\" y=\"0\" x=\"0\" fill=\"#ffffff\"></use>\n          <use id=\"tripple-4\" (click)=\"score(3, 4)\" xlink:href=\"#triple\" height=\"500\" width=\"500\" y=\"0\" x=\"0\" fill=\"#008000\"></use>\n          <use id=\"single-i-4\" (click)=\"score(1, 4)\" xlink:href=\"#inner\" height=\"500\" width=\"500\" y=\"0\" x=\"0\" fill=\"#ffffff\"></use>\n        </g>\n        <g id=\"field-18\" transform=\"rotate(-36)\">\n          <use id=\"double-18\" (click)=\"score(2, 18)\" xlink:href=\"#double\" height=\"500\" width=\"500\" y=\"0\" x=\"0\" fill=\"#ff0000\"></use>\n          <use id=\"single-o-18\" (click)=\"score(1, 18)\" xlink:href=\"#outer\" height=\"500\" width=\"500\" y=\"0\" x=\"0\" fill=\"#000000\"></use>\n          <use id=\"tripple-o-18\" (click)=\"score(3, 18)\" xlink:href=\"#triple\" height=\"500\" width=\"500\" y=\"0\" x=\"0\" fill=\"#ff0000\"></use>\n          <use id=\"single-i-18\" (click)=\"score(1, 18)\" xlink:href=\"#inner\" height=\"500\" width=\"500\" y=\"0\" x=\"0\" fill=\"#000000\"></use>\n        </g>\n        <g id=\"field-1\" transform=\"rotate(-18)\">\n          <use id=\"double-1\" (click)=\"score(2, 1)\" xlink:href=\"#double\" height=\"500\" width=\"500\" y=\"0\" x=\"0\" fill=\"#008000\"></use>\n          <use id=\"single-o-1\" (click)=\"score(1, 1)\" xlink:href=\"#outer\" height=\"500\" width=\"500\" y=\"0\" x=\"0\" fill=\"#ffffff\"></use>\n          <use id=\"tripple-1\" (click)=\"score(3, 1)\" xlink:href=\"#triple\" height=\"500\" width=\"500\" y=\"0\" x=\"0\" fill=\"#008000\"></use>\n          <use id=\"single-i-1\" (click)=\"score(1, 1)\" xlink:href=\"#inner\" height=\"500\" width=\"500\" y=\"0\" x=\"0\" fill=\"#ffffff\"></use>\n        </g>\n        <circle id=\"single-bull\" (click)=\"score(1, 25)\" stroke-width=\"0\" cy=\"0\" cx=\"0\" r=\"16.4\" fill=\"#008000\"></circle>\n        <circle id=\"bulls-eye\" (click)=\"score(2, 25)\" stroke-width=\"0\" cy=\"0\" cx=\"0\" r=\"6.85\" fill=\"#f00\"></circle>\n        <g id=\"grid\">\n          <use id=\"use224\" xlink:href=\"#refwire\" height=\"500\" width=\"500\" y=\"0\" x=\"0\"></use>\n          <use id=\"use226\" xlink:href=\"#refwire\" transform=\"rotate(18)\" height=\"500\" width=\"500\" y=\"0\" x=\"0\"></use>\n          <use id=\"use228\" xlink:href=\"#refwire\" transform=\"rotate(36)\" height=\"500\" width=\"500\" y=\"0\" x=\"0\"></use>\n          <use id=\"use230\" xlink:href=\"#refwire\" transform=\"rotate(54)\" height=\"500\" width=\"500\" y=\"0\" x=\"0\"></use>\n          <use id=\"use232\" xlink:href=\"#refwire\" transform=\"rotate(72.001)\" height=\"500\" width=\"500\" y=\"0\" x=\"0\"></use>\n          <use id=\"use234\" xlink:href=\"#refwire\" transform=\"rotate(90)\" height=\"500\" width=\"500\" y=\"0\" x=\"0\"></use>\n          <use id=\"use236\" xlink:href=\"#refwire\" transform=\"rotate(108)\" height=\"500\" width=\"500\" y=\"0\" x=\"0\"></use>\n          <use id=\"use238\" xlink:href=\"#refwire\" transform=\"rotate(126)\" height=\"500\" width=\"500\" y=\"0\" x=\"0\"></use>\n          <use id=\"use240\" xlink:href=\"#refwire\" transform=\"rotate(144)\" height=\"500\" width=\"500\" y=\"0\" x=\"0\"></use>\n          <use id=\"use242\" xlink:href=\"#refwire\" transform=\"rotate(162)\" height=\"500\" width=\"500\" y=\"0\" x=\"0\"></use>\n          <use id=\"use244\" xlink:href=\"#refwire\" transform=\"scale(-1)\" height=\"500\" width=\"500\" y=\"0\" x=\"0\"></use>\n          <use id=\"use246\" xlink:href=\"#refwire\" transform=\"rotate(198)\" height=\"500\" width=\"500\" y=\"0\" x=\"0\"></use>\n          <use id=\"use248\" xlink:href=\"#refwire\" transform=\"rotate(216)\" height=\"500\" width=\"500\" y=\"0\" x=\"0\"></use>\n          <use id=\"use250\" xlink:href=\"#refwire\" transform=\"rotate(234)\" height=\"500\" width=\"500\" y=\"0\" x=\"0\"></use>\n          <use id=\"use252\" xlink:href=\"#refwire\" transform=\"rotate(252)\" height=\"500\" width=\"500\" y=\"0\" x=\"0\"></use>\n          <use id=\"use254\" xlink:href=\"#refwire\" transform=\"rotate(-90)\" height=\"500\" width=\"500\" y=\"0\" x=\"0\"></use>\n          <use id=\"use256\" xlink:href=\"#refwire\" transform=\"rotate(-72.001)\" height=\"500\" width=\"500\" y=\"0\" x=\"0\"></use>\n          <use id=\"use258\" xlink:href=\"#refwire\" transform=\"rotate(-54)\" height=\"500\" width=\"500\" y=\"0\" x=\"0\"></use>\n          <use id=\"use260\" xlink:href=\"#refwire\" transform=\"rotate(-36)\" height=\"500\" width=\"500\" y=\"0\" x=\"0\"></use>\n          <use id=\"use262\" xlink:href=\"#refwire\" transform=\"rotate(-18)\" height=\"500\" width=\"500\" y=\"0\" x=\"0\"></use>\n          <circle id=\"circle264\" cx=\"0\" cy=\"0\" stroke=\"#c0c0c0\" r=\"169.5\" fill=\"none\"></circle>\n          <circle id=\"circle266\" cx=\"0\" cy=\"0\" stroke=\"#c0c0c0\" r=\"160.5\" fill=\"none\"></circle>\n          <circle id=\"circle268\" cx=\"0\" cy=\"0\" stroke=\"#c0c0c0\" r=\"106.5\" fill=\"none\"></circle>\n          <circle id=\"circle270\" cx=\"0\" cy=\"0\" stroke=\"#c0c0c0\" r=\"97.5\" fill=\"none\"></circle>\n          <circle id=\"circle272\" cx=\"0\" cy=\"0\" stroke=\"#c0c0c0\" r=\"16.4\" fill=\"none\"></circle>\n          <circle id=\"circle274\" cx=\"0\" cy=\"0\" stroke=\"#c0c0c0\" r=\"6.85\" fill=\"none\"></circle>\n        </g>\n      </g>\n    </g>\n    <g id=\"numbers\" pointer-events=\"none\" fill=\"#c0c0c0\" transform=\"translate(26 48)\">\n      <path id=\"number-label-06\" transform=\"rotate(270) translate(-155 250)\" d=\"m206.43-47.773c0-1.467-0.5-2.631-1.51-3.494-1-0.851-2.37-1.277-4.12-1.277-1.74 0-3.11 0.426-4.13 1.277-1 0.863-1.5 2.027-1.5 3.494 0 1.466 0.5 2.625 1.5 3.477 1.02 0.862 2.39 1.293 4.13 1.293 1.75 0 3.12-0.431 4.12-1.293 1.01-0.852 1.51-2.011 1.51-3.477m10.23 6.485h-2.97c0.39-0.82 0.68-1.65 0.89-2.491 0.2-0.83 0.3-1.655 0.3-2.474 0-2.157-0.72-3.806-2.18-4.949-1.45-1.132-3.65-1.779-6.6-1.941 0.94 0.636 1.66 1.434 2.15 2.394 0.51 0.959 0.76 2.016 0.76 3.17 0 2.425-0.73 4.339-2.21 5.741-1.47 1.412-3.47 2.118-6 2.118-2.48 0-4.47-0.733-5.97-2.199s-2.25-3.418-2.25-5.854c0-2.793 1.07-4.928 3.21-6.405s5.25-2.215 9.31-2.215c3.82 0 6.86 0.905 9.12 2.717 2.28 1.811 3.41 4.242 3.41 7.293 0 0.82-0.08 1.645-0.24 2.475-0.16 0.841-0.4 1.714-0.73 2.62\"></path>\n      <path id=\"number-label-13\" transform=\"rotate(288) translate(-30 260)\" d=\"m179.63-133.33l1.65 5.07 17.52-5.69-2.9-5.16 2.83-0.92 2.89 5.13 1.01 3.11-20.35 6.61 1.65 5.07-2.61 0.85-4.3-13.22 2.61-0.85m19.15 25.69c0.16 1.59-0.12 2.97-0.86 4.12-0.73 1.17-1.83 2-3.31 2.47-2.26 0.74-4.27 0.53-6.02-0.62-1.74-1.16-3.08-3.17-4.02-6.04-0.31-0.97-0.54-1.99-0.67-3.08-0.15-1.08-0.21-2.22-0.18-3.43l3-0.97c-0.23 1.02-0.3 2.09-0.22 3.19 0.07 1.11 0.29 2.23 0.66 3.34 0.63 1.95 1.5 3.31 2.6 4.07 1.1 0.78 2.38 0.93 3.85 0.45 1.35-0.44 2.25-1.26 2.7-2.46 0.46-1.19 0.42-2.63-0.13-4.32l-0.87-2.68 2.55-0.83 0.91 2.8c0.5 1.53 1.18 2.6 2.05 3.21 0.88 0.61 1.89 0.73 3.04 0.36 1.18-0.39 1.95-1.1 2.3-2.14 0.36-1.04 0.29-2.34-0.21-3.9-0.28-0.85-0.67-1.73-1.17-2.65-0.5-0.91-1.13-1.89-1.9-2.93l2.76-0.9c0.72 1.07 1.32 2.1 1.82 3.07 0.5 0.98 0.9 1.93 1.19 2.84 0.77 2.36 0.84 4.4 0.21 6.12-0.62 1.72-1.85 2.88-3.67 3.47-1.27 0.42-2.47 0.4-3.59-0.04-1.1-0.44-2.05-1.28-2.82-2.52\"></path>\n      <path id=\"number-label-04\" transform=\"rotate(306) translate(75 205)\" d=\"m169.29-188.85l-15.27 0.91 4.84 6.67 10.43-7.58m1.8-2.36l2.42 3.32-12.74 9.25 2.03 2.79-2.2 1.59-2.02-2.78-4.61 3.34-1.91-2.63 4.61-3.34-6.41-8.82 2.55-1.85 18.28-0.87\"></path>\n      <path id=\"number-label-18\" transform=\"rotate(324) translate(110 110)\" d=\"m89.936-238.99l4.318 3.14 10.826-14.9-5.38-2.47 1.75-2.41 5.35 2.45 2.65 1.92-12.579 17.31 4.319 3.14-1.618 2.22-11.252-8.17 1.616-2.23m27.324 9.08c-1.25-0.91-2.49-1.29-3.7-1.15-1.2 0.16-2.23 0.82-3.09 2-0.85 1.18-1.17 2.36-0.94 3.55 0.24 1.2 0.98 2.25 2.24 3.17 1.25 0.91 2.49 1.29 3.7 1.15 1.22-0.16 2.25-0.82 3.1-1.99 0.86-1.18 1.17-2.36 0.93-3.56-0.23-1.19-0.97-2.25-2.24-3.17m-1.82-3.04c-0.93-1.1-1.44-2.28-1.51-3.51-0.06-1.24 0.31-2.41 1.12-3.53 1.14-1.56 2.59-2.39 4.35-2.49 1.78-0.1 3.64 0.56 5.57 1.96 1.95 1.42 3.14 2.98 3.59 4.69s0.11 3.35-1.03 4.91c-0.81 1.12-1.81 1.83-3.01 2.15s-2.46 0.21-3.78-0.33c1.05 1.22 1.62 2.52 1.7 3.9 0.09 1.38-0.32 2.7-1.23 3.94-1.37 1.9-3.01 2.93-4.9 3.1s-3.91-0.52-6.06-2.09c-2.16-1.57-3.45-3.28-3.87-5.13s0.06-3.72 1.44-5.61c0.9-1.25 2.03-2.04 3.37-2.39 1.34-0.34 2.76-0.2 4.25 0.43m2.06-4.88c-0.73 1.01-0.99 2.03-0.78 3.05 0.23 1.03 0.91 1.96 2.05 2.79s2.23 1.19 3.28 1.08c1.06-0.09 1.95-0.65 2.69-1.66 0.73-1.01 0.98-2.04 0.75-3.07s-0.9-1.96-2.04-2.78c-1.14-0.83-2.24-1.2-3.29-1.09-1.04 0.11-1.92 0.67-2.66 1.68\"></path>\n      <path id=\"number-label-01\" transform=\"rotate(342) translate(70 25)\" d=\"m35.237-262.76l5.075 1.65 5.693-17.52-5.882-0.68 0.92-2.83 5.85 0.67 3.107 1.01-6.611 20.35 5.075 1.65-0.849 2.62-13.228-4.3 0.85-2.62\"></path>\n      <path id=\"number-label-20\" transform=\"translate(0 5)\"d=\"m-42.456-271.72h11.401v2.75h-15.331v-2.75c1.24-1.28 2.927-3 5.062-5.16 2.145-2.16 3.493-3.56 4.043-4.19 1.046-1.17 1.774-2.16 2.183-2.97 0.421-0.82 0.631-1.62 0.631-2.41 0-1.28-0.453-2.33-1.358-3.14-0.895-0.81-2.065-1.21-3.51-1.21-1.024 0-2.108 0.18-3.251 0.53-1.132 0.36-2.345 0.9-3.638 1.62v-3.3c1.315-0.53 2.544-0.93 3.687-1.2s2.189-0.4 3.137-0.4c2.502 0 4.496 0.62 5.984 1.87 1.488 1.26 2.232 2.93 2.232 5.02 0 0.99-0.189 1.93-0.566 2.83-0.367 0.88-1.04 1.93-2.022 3.14-0.269 0.31-1.126 1.21-2.571 2.71-1.445 1.49-3.482 3.58-6.113 6.26m25.196-19.24c-1.681 0-2.948 0.83-3.8 2.49-0.841 1.65-1.261 4.13-1.261 7.45 0 3.31 0.42 5.8 1.261 7.46 0.852 1.65 2.119 2.47 3.8 2.47 1.693 0 2.96-0.82 3.801-2.47 0.852-1.66 1.278-4.15 1.278-7.46 0-3.32-0.426-5.8-1.278-7.45-0.841-1.66-2.108-2.49-3.801-2.49m0-2.59c2.707 0 4.771 1.07 6.195 3.22 1.4335 2.13 2.1505 5.24 2.1505 9.31s-0.717 7.17-2.1505 9.32c-1.424 2.13-3.488 3.2-6.195 3.2-2.706 0-4.776-1.07-6.21-3.2-1.423-2.15-2.134-5.25-2.134-9.32s0.711-7.18 2.134-9.31c1.434-2.15 3.504-3.22 6.21-3.22\"></path>\n      <path id=\"number-label-05\" transform=\"rotate(18) translate(-70 45)\" d=\"m-110.08-278.97l12.198-3.96 0.849 2.61-9.347 3.04 1.82 5.63c0.41-0.3 0.82-0.56 1.25-0.78 0.42-0.23 0.86-0.42 1.31-0.56 2.566-0.84 4.824-0.79 6.778 0.12 1.953 0.92 3.32 2.58 4.099 4.98 0.803 2.47 0.659 4.65-0.433 6.52-1.095 1.86-3.042 3.25-5.841 4.16-0.964 0.31-1.975 0.55-3.033 0.71-1.05 0.16-2.16 0.25-3.33 0.27l-1.02-3.12c1.09 0.2 2.17 0.26 3.23 0.19s2.144-0.29 3.242-0.65c1.774-0.57 3.027-1.5 3.759-2.77 0.733-1.26 0.839-2.7 0.319-4.3-0.519-1.6-1.449-2.7-2.788-3.29-1.338-0.6-2.895-0.61-4.672-0.03-0.83 0.27-1.63 0.63-2.4 1.08-0.76 0.45-1.51 1.01-2.24 1.68l-3.75-11.53\"></path>\n      <path id=\"number-label-12\" transform=\"rotate(36) translate(-100 140)\" d=\"m-172.84-219.08l4.31-3.14-10.82-14.9-4.02 4.36-1.75-2.41 3.99-4.34 2.64-1.92 12.58 17.31 4.32-3.13 1.61 2.22-11.25 8.17-1.61-2.22m18.82-13.68l9.23-6.7 1.61 2.22-12.4 9.02-1.62-2.23c0.25-1.77 0.61-4.15 1.07-7.15 0.46-3.01 0.73-4.93 0.81-5.76 0.15-1.57 0.16-2.8 0.01-3.69-0.14-0.91-0.44-1.69-0.9-2.32-0.76-1.04-1.74-1.62-2.95-1.74-1.2-0.13-2.38 0.23-3.55 1.08-0.83 0.6-1.6 1.38-2.31 2.34-0.71 0.95-1.38 2.1-2 3.45l-1.94-2.67c0.76-1.2 1.52-2.25 2.28-3.14 0.77-0.89 1.54-1.61 2.3-2.17 2.03-1.47 4.01-2.14 5.95-2s3.52 1.05 4.75 2.75c0.58 0.8 0.98 1.67 1.2 2.62 0.23 0.93 0.3 2.17 0.21 3.73-0.03 0.41-0.19 1.64-0.48 3.7s-0.72 4.94-1.27 8.66\"></path>\n      <path id=\"number-label-09\" transform=\"rotate(54) translate(-60 255)\" d=\"m-210.84-172.68l-2.41-1.75c0.8-0.44 1.53-0.93 2.19-1.49s1.23-1.17 1.7-1.83c1.27-1.74 1.65-3.49 1.15-5.26-0.51-1.78-1.91-3.6-4.2-5.47 0.38 1.05 0.49 2.11 0.33 3.18-0.17 1.07-0.59 2.07-1.28 3.01-1.41 1.96-3.13 3.08-5.14 3.36s-4.04-0.33-6.09-1.82c-2-1.46-3.18-3.22-3.53-5.29s0.19-4.09 1.62-6.06c1.64-2.26 3.76-3.35 6.36-3.27 2.6 0.06 5.54 1.28 8.84 3.68 3.08 2.24 5.01 4.76 5.78 7.56 0.77 2.79 0.26 5.41-1.53 7.88-0.48 0.67-1.03 1.29-1.66 1.88-0.62 0.58-1.33 1.14-2.13 1.69m-4.46-11.28c0.86-1.19 1.14-2.42 0.83-3.7s-1.16-2.44-2.58-3.47c-1.4-1.02-2.76-1.47-4.08-1.37s-2.41 0.74-3.28 1.92c-0.86 1.19-1.13 2.43-0.82 3.72 0.31 1.28 1.17 2.43 2.57 3.45 1.42 1.03 2.78 1.49 4.09 1.39 1.32-0.11 2.41-0.75 3.27-1.94\"></path>\n      <path id=\"number-label-14\" transform=\"rotate(72) translate(65 315)\" d=\"m-245.6-101.16l1.65-5.07-17.52-5.69-0.68 5.88-2.83-0.92 0.67-5.85 1.01-3.11 20.35 6.61 1.65-5.07 2.61 0.85-4.29 13.22-2.62-0.85m-8.54-33.72l9.71 11.83 2.54-7.85-12.25-3.98m-2.98-0.07l1.27-3.9 14.97 4.86 1.06-3.28 2.59 0.84-1.07 3.28 5.42 1.76-1.01 3.09-5.41-1.76-3.37 10.37-3-0.98-11.45-14.28\"></path>\n      <path id=\"number-label-11\" transform=\"rotate(90) translate(210 300)\" d=\"m-251.31-31.245v-5.337h-18.42l1.16 5.806h-2.97l-1.17-5.774v-3.267h21.4v-5.337h2.75v13.909h-2.75m0-21.024v-5.337h-18.42l1.16 5.806h-2.97l-1.17-5.774v-3.267h21.4v-5.337h2.75v13.909h-2.75\"></path>\n      <path id=\"number-label-08\" transform=\"rotate(288) translate(160 -255)\" d=\"m-247.86 23.336c-0.48-1.476-1.25-2.512-2.31-3.106-1.07-0.585-2.29-0.652-3.68-0.202-1.38 0.45-2.33 1.223-2.85 2.321-0.51 1.107-0.53 2.399-0.05 3.876s1.26 2.512 2.32 3.107c1.08 0.591 2.3 0.663 3.68 0.217 1.38-0.45 2.33-1.229 2.84-2.336 0.52-1.098 0.54-2.39 0.05-3.877m0.32-3.536c-0.11-1.44 0.17-2.682 0.84-3.727 0.68-1.035 1.67-1.766 2.98-2.192 1.84-0.597 3.5-0.417 4.99 0.539 1.49 0.966 2.61 2.587 3.35 4.863 0.74 2.287 0.79 4.255 0.15 5.903-0.65 1.649-1.89 2.772-3.72 3.368-1.31 0.427-2.55 0.414-3.7-0.038-1.16-0.442-2.11-1.271-2.87-2.487 0.14 1.61-0.16 2.996-0.91 4.156-0.74 1.171-1.85 1.994-3.31 2.471-2.23 0.723-4.16 0.595-5.79-0.382-1.63-0.967-2.85-2.717-3.68-5.249-0.82-2.533-0.86-4.675-0.11-6.425 0.75-1.74 2.24-2.971 4.46-3.694 1.47-0.477 2.84-0.46 4.13 0.051s2.35 1.459 3.19 2.843m4.53-2.733c-1.19 0.387-1.99 1.057-2.42 2.012-0.42 0.965-0.42 2.119 0.02 3.463 0.43 1.333 1.1 2.265 2.01 2.797 0.92 0.542 1.97 0.62 3.16 0.234 1.19-0.387 1.99-1.068 2.41-2.043 0.43-0.965 0.42-2.114-0.01-3.447-0.44-1.343-1.11-2.281-2.02-2.813-0.91-0.522-1.96-0.589-3.15-0.203\"></path>\n      <path id=\"number-label-16\" transform=\"rotate(306) translate(30 -210)\" d=\"m-231.99 79.277l3.13 4.317 14.91-10.827-4.36-4.012 2.41-1.75 4.33 3.987 1.92 2.643-17.31 12.576 3.14 4.318-2.22 1.616-8.18-11.252 2.23-1.616m24.96 16.285c-0.86-1.187-1.95-1.834-3.27-1.942-1.31-0.1-2.67 0.363-4.09 1.39-1.4 1.02-2.26 2.173-2.58 3.458-0.31 1.287-0.03 2.522 0.83 3.712 0.87 1.18 1.95 1.83 3.27 1.93s2.69-0.36 4.09-1.38c1.42-1.03 2.27-2.18 2.58-3.471 0.31-1.279 0.03-2.511-0.83-3.697m12.09-0.771l-2.4 1.749c-0.17-0.891-0.42-1.737-0.75-2.538-0.32-0.792-0.72-1.519-1.2-2.182-1.27-1.745-2.83-2.651-4.68-2.72-1.84-0.061-4 0.709-6.48 2.308 1.14-0.037 2.19 0.187 3.15 0.672 0.97 0.479 1.8 1.184 2.48 2.118 1.42 1.962 1.95 3.945 1.58 5.942-0.36 2.01-1.56 3.76-3.61 5.25-2 1.45-4.04 2.03-6.12 1.72-2.07-0.3-3.83-1.44-5.26-3.41-1.64-2.26-2.03-4.615-1.17-7.065 0.87-2.456 2.94-4.878 6.23-7.268 3.09-2.243 6.08-3.297 8.98-3.163 2.9 0.128 5.25 1.427 7.05 3.895 0.48 0.663 0.9 1.378 1.25 2.145 0.37 0.775 0.68 1.624 0.95 2.547\"></path>\n      <path id=\"number-label-07\" transform=\"rotate(324) translate(-40 -125)\" d=\"m-162.66 124.2l12.56 9.13-0.82 1.13-20.47 13.25-2.76-2 19.25-12.47-9.38-6.81 1.62-2.23\"></path>\n      <path id=\"number-label-19\" transform=\"rotate(342) translate(-40 -45)\" d=\"m-118.05 175l5.07 1.65 5.7-17.52-5.88-0.69 0.92-2.83 5.85 0.68 3.1 1.01-6.61 20.35 5.08 1.64-0.85 2.62-13.23-4.3 0.85-2.61m18.854 8.49l0.919-2.83c0.659 0.62 1.357 1.16 2.094 1.61 0.736 0.46 1.489 0.81 2.258 1.06 2.051 0.67 3.838 0.49 5.361-0.54 1.537-1.03 2.838-2.92 3.905-5.68-0.881 0.68-1.855 1.12-2.92 1.29-1.066 0.18-2.153 0.08-3.26-0.28-2.297-0.74-3.892-2.03-4.786-3.85-0.88-1.82-0.928-3.94-0.145-6.35 0.766-2.36 2.078-4.03 3.936-5 1.857-0.97 3.945-1.08 6.262-0.33 2.656 0.87 4.349 2.54 5.081 5.04 0.745 2.48 0.488 5.67-0.771 9.54-1.177 3.62-2.977 6.23-5.403 7.84-2.412 1.59-5.069 1.92-7.971 0.98-0.779-0.25-1.544-0.59-2.294-1-0.749-0.42-1.505-0.92-2.266-1.5m9.346-7.73c1.395 0.45 2.652 0.33 3.772-0.36 1.13-0.68 1.965-1.86 2.505-3.52 0.536-1.65 0.549-3.09 0.039-4.31-0.497-1.22-1.443-2.06-2.838-2.52-1.394-0.45-2.658-0.33-3.792 0.37-1.12 0.69-1.948 1.86-2.484 3.51-0.54 1.66-0.56 3.1-0.059 4.32 0.51 1.22 1.463 2.06 2.857 2.51\"></path>\n      <path id=\"number-label-03\" transform=\"translate(0 -5)\" d=\"m-24.828 181.71c1.563 0.33 2.781 1.03 3.655 2.08 0.884 1.06 1.326 2.37 1.326 3.92 0 2.38-0.82 4.22-2.458 5.53-1.639 1.3-3.968 1.96-6.987 1.96-1.013 0-2.059-0.11-3.137-0.31-1.068-0.2-2.173-0.49-3.316-0.89v-3.15c0.906 0.52 1.898 0.92 2.976 1.19s2.205 0.41 3.38 0.41c2.049 0 3.607-0.41 4.674-1.22 1.078-0.81 1.617-1.98 1.617-3.52 0-1.43-0.501-2.54-1.504-3.33-0.992-0.81-2.377-1.22-4.156-1.22h-2.814v-2.68h2.943c1.607 0 2.836-0.32 3.688-0.96 0.851-0.64 1.277-1.57 1.277-2.78 0-1.24-0.442-2.19-1.326-2.84-0.873-0.67-2.129-1.01-3.768-1.01-0.895 0-1.855 0.1-2.879 0.3-1.024 0.19-2.151 0.49-3.38 0.9v-2.91c1.24-0.35 2.399-0.6 3.477-0.78 1.089-0.17 2.113-0.26 3.073-0.26 2.48 0 4.442 0.57 5.887 1.7 1.444 1.12 2.167 2.64 2.167 4.56 0 1.34-0.383 2.47-1.148 3.4-0.766 0.92-1.855 1.55-3.267 1.91\"></path>\n      <path id=\"number-label-17\" transform=\"rotate(18) translate(50 -30)\"d=\"m30.332 185.46l5.076-1.65-5.692-17.52-5.162 2.91-0.92-2.83 5.132-2.9 3.107-1.01 6.611 20.35 5.076-1.65 0.85 2.62-13.228 4.3-0.85-2.62m12.061-26.41l14.766-4.8 0.43 1.32-1.305 24.35-3.246 1.05 1.233-22.89-11.028 3.58-0.85-2.61\"></path>\n      <path id=\"number-label-02\" transform=\"rotate(36) translate(60 -95)\" d=\"m110.03 148.56l9.23-6.7 1.61 2.22-12.4 9.01-1.62-2.22c0.25-1.77 0.61-4.15 1.07-7.15 0.46-3.02 0.73-4.94 0.8-5.77 0.16-1.56 0.17-2.79 0.02-3.69-0.14-0.91-0.44-1.68-0.9-2.32-0.76-1.04-1.74-1.62-2.95-1.74-1.2-0.13-2.38 0.24-3.55 1.08-0.83 0.61-1.6 1.39-2.316 2.35-0.706 0.95-1.371 2.1-1.993 3.44l-1.939-2.66c0.753-1.21 1.513-2.25 2.279-3.14 0.767-0.89 1.534-1.61 2.301-2.17 2.028-1.47 4.008-2.14 5.948-2 1.93 0.14 3.52 1.05 4.75 2.74 0.58 0.81 0.98 1.68 1.2 2.63 0.23 0.93 0.3 2.17 0.21 3.72-0.03 0.41-0.19 1.65-0.48 3.71-0.3 2.05-0.72 4.94-1.27 8.66\"></path>\n      <path id=\"number-label-15\" transform=\"rotate(54) translate(-2 -170)\" d=\"m156.56 106.7l3.14-4.32-14.91-10.825-2.47 5.382-2.4-1.749 2.45-5.355 1.92-2.643 17.31 12.576 3.13-4.318 2.23 1.616-8.18 11.256-2.22-1.62m-5.27-29.153l7.54-10.376 2.23 1.616-5.78 7.955 4.78 3.48c0.15-0.479 0.34-0.933 0.55-1.361 0.21-0.434 0.46-0.844 0.74-1.227 1.58-2.181 3.43-3.474 5.55-3.879s4.2 0.133 6.24 1.616c2.11 1.528 3.27 3.37 3.48 5.528 0.21 2.151-0.55 4.417-2.28 6.798-0.59 0.82-1.27 1.607-2.03 2.36-0.76 0.745-1.6 1.469-2.54 2.174l-2.66-1.93c1-0.474 1.91-1.054 2.73-1.74 0.82-0.685 1.56-1.494 2.24-2.427 1.1-1.509 1.57-2.993 1.42-4.45-0.16-1.458-0.92-2.681-2.28-3.67-1.36-0.988-2.75-1.331-4.19-1.026-1.43 0.304-2.7 1.211-3.79 2.72-0.52 0.706-0.95 1.47-1.31 2.29-0.35 0.812-0.62 1.705-0.82 2.678l-9.82-7.129\"></path>\n      <path id=\"number-label-10\" transform=\"rotate(72) translate(-120 -195)\" d=\"m195.39 42.165l1.65-5.076-17.52-5.692-0.68 5.881-2.83-0.919 0.67-5.851 1.01-3.107 20.35 6.612 1.65-5.076 2.62 0.85-4.3 13.227-2.62-0.849m-9.82-32.049c-0.52 1.6-0.12 3.061 1.19 4.384 1.31 1.31 3.55 2.478 6.71 3.504 3.14 1.023 5.64 1.391 7.48 1.104 1.83-0.3 3-1.25 3.52-2.85 0.53-1.61 0.13-3.069-1.18-4.379-1.31-1.323-3.54-2.4961-6.69-3.519-3.16-1.0261-5.65-1.3891-7.49-1.0888-1.84 0.2868-3.02 1.2351-3.54 2.8448m-2.46-0.7995c0.84-2.5737 2.49-4.2058 4.97-4.8964 2.48-0.704 5.65-0.4264 9.53 0.833 3.86 1.2561 6.6 2.8975 8.19 4.9239 1.59 2.014 1.97 4.307 1.13 6.881-0.83 2.573-2.49 4.212-4.96 4.916-2.48 0.691-5.65 0.408-9.52-0.848-3.87-1.259-6.61-2.895-8.2-4.909-1.6-2.026-1.98-4.327-1.14-6.9005\"></path>\n    </g>\n  </svg>\n\n  <button class=\"btn btn-danger right\" *ngIf=\"throwsDone > 0\" (click)=\"revertScore()\">\n    <span class=\"revert-label\">{{'page.dartScoreBoard.setup.throwInput.resetThrow' | translate}}</span> <svg-icon src=\"/assets/pictures/tools/dart-score-board/revert.svg\" [svgStyle]=\"{ 'width.px':24, 'fill': '#FFFFFF', 'height.px':20}\"></svg-icon>\n  </button>\n</div>\n",
                styles: [".board-container{width:100%;max-width:1000px;margin:0 auto}.right{float:right}.revert-label{margin-right:1rem;font-size:2rem;margin-left:.5rem}"]
            }] }
];
/** @nocollapse */
DartBoardComponent.ctorParameters = () => [];
DartBoardComponent.propDecorators = {
    scoreEntered: [{ type: Output }],
    scoreReverted: [{ type: Output }],
    throwsDone: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DartBoardPanelComponent {
    /**
     * @param {?} translate
     */
    constructor(translate) {
        this.translate = translate;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.dartGameData = new DartGameData();
        this.dartGameData.settings = new GameSettings();
        this.dartGameData.settings.gameMode = GameModes.FREE_GAME;
        this.dartGameData.settings.requiredScore = 501;
        this.dartGameData.settings.players = [];
        this.dartGameData.currentPlayerMapKeys = [];
        TranslationProvider.setupTranslationProvider(this.translate, this.locale);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
    }
    /**
     * @return {?}
     */
    startNewGame() {
        this.gamePanel.startNewGame();
    }
}
DartBoardPanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-dart-board-panel',
                template: "<div class=\"main-panel\">\r\n  <app-setup-panel [gameSettings]=\"dartGameData.settings\" (gameStarted)=\"startNewGame()\"></app-setup-panel>\r\n  <hr>\r\n  <app-game-panel [dartGameData]=\"dartGameData\" #gamePanel></app-game-panel>\r\n  <div class=\"col-xs-12\">\r\n    <hr>\r\n  </div>\r\n  <app-export-import-data-panel [dartGameData]=\"dartGameData\"></app-export-import-data-panel>\r\n</div>\r\n\r\n",
                styles: [".main-panel{max-width:1000px;margin:0 auto 3rem;position:relative;min-width:350px}"]
            }] }
];
/** @nocollapse */
DartBoardPanelComponent.ctorParameters = () => [
    { type: TranslateService }
];
DartBoardPanelComponent.propDecorators = {
    gamePanel: [{ type: ViewChild, args: ['gamePanel',] }],
    locale: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DartScoreBoardLibraryModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: DartScoreBoardLibraryModule,
            providers: [ScoreService]
        };
    }
}
DartScoreBoardLibraryModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    DartScoreBoardLibraryComponent,
                    DartBoardPanelComponent,
                    DartBoardComponent,
                    ScorePanelComponent,
                    SetupPanelComponent,
                    GamePanelComponent,
                    ExportImportDataPanelComponent
                ],
                imports: [
                    BrowserModule,
                    FormsModule,
                    CommonModule,
                    AngularSvgIconModule,
                    HttpClientModule,
                    DragDropModule,
                    TranslateModule.forRoot()
                ],
                providers: [ScoreService],
                exports: [DartScoreBoardLibraryComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { DartScoreBoardLibraryService, DartScoreBoardLibraryComponent, DartScoreBoardLibraryModule, DartBoardPanelComponent as ɵa, DartBoardComponent as ɵb, ExportImportDataPanelComponent as ɵg, GamePanelComponent as ɵf, ScorePanelComponent as ɵc, ScoreService as ɵd, SetupPanelComponent as ɵe };

//# sourceMappingURL=dart-score-board-library.js.map