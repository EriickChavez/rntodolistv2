TodoNativeModule.kt
package com.nativetoast

import android.widget.Toast
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class TodoNativeModule(reactContext: ReactApplicationContext) : NativeToastSpec(reactContext) {

    override fun getName() = NAME

    override fun showToast(value: String?) {
        Toast.makeText(
            reactApplicationContext,
            "$value",
            Toast.LENGTH_LONG
        ).show()
    }

    companion object {
        const val NAME = "NativeToast"
    }
}

TodoPackage.kt
package com.nativetoast

import com.facebook.react.BaseReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.model.ReactModuleInfo
import com.facebook.react.module.model.ReactModuleInfoProvider

class TodoPackage : BaseReactPackage() {

    override fun getModule(name: String, reactContext: ReactApplicationContext): NativeModule? =
        if (name == TodoNativeModule.NAME) {
            TodoNativeModule(reactContext)
        } else {
            null
        }

    override fun getReactModuleInfoProvider() = ReactModuleInfoProvider {
        mapOf(
            TodoNativeModule.NAME to ReactModuleInfo(
                name = TodoNativeModule.NAME,
                className = TodoNativeModule.NAME,
                canOverrideExistingModule = false,
                needsEagerInit = false,
                isCxxModule = false,
                isTurboModule = true
            )
        )
    }
}