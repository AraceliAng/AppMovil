package com.appempresa;

import android.app.Application;

import com.facebook.react.ReactApplication;
// import com.reactlibrary.RNFirebasePhoneAuthPackage;
import com.airbnb.android.react.maps.MapsPackage;
import com.taluttasgiran.pickermodule.ReactNativePickerModulePackage;
import com.imagepicker.ImagePickerPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

//agregando imagenes en firebase
import com.RNFetchBlob.RNFetchBlobPackage;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            // new RNFirebasePhoneAuthPackage(),
            new MapsPackage(),
            new ReactNativePickerModulePackage(),
            new ImagePickerPackage(),
            new RNFetchBlobPackage() //imagenes en firebase
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}