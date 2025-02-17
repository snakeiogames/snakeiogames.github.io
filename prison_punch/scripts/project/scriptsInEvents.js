


const scriptsInEvents = {

	async Sdk_Event7(runtime, localVars)
	{
		const sdkElem = document.createElement("script");
		sdkElem.type = "text/javascript";
		sdkElem.src = "https://sdk.crazygames.com/Construct3CrazySDK-v3.js";
		document.body.appendChild(sdkElem);
		sdkElem.onload = function () {
		    window.ConstructCrazySDK.init()
		        .then(() => {
					runtime.globalVars.IS_SDK_LOADED = 1;
		            runtime.callFunction("on_loaded");
		        })
		        .catch((e) => console.log("Failed to init CrazySDK", e));
		};
		sdkElem.onerror = function () {
		    console.error("Failed to load Construct3CrazySDK script.");
		};
	},

	async Sdk_Event13(runtime, localVars)
	{
		await window.ConstructCrazySDK.ad.requestAd("midgame");
	},

	async Sdk_Event23(runtime, localVars)
	{
		await window.ConstructCrazySDK.ad.requestAd("rewarded");
	},

	async Sdk_Event31(runtime, localVars)
	{
		window.ConstructCrazySDK.game.happytime();
	},

	async Sdk_Event37(runtime, localVars)
	{
		window.ConstructCrazySDK.game.gameplayStart();
	},

	async Sdk_Event43(runtime, localVars)
	{
		window.ConstructCrazySDK.game.gameplayStop();
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

