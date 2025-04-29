#import "RCTNativeToast.h"
#import <React/RCTBridgeModule.h>
#import <UIKit/UIKit.h>
#import <React/RCTUtils.h>
#import <React/RCTLog.h>


@interface RCTNativeToast () <RCTTurboModule>
@end

@implementation RCTNativeToast

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(showToast:(NSString *)value)
{
  dispatch_async(dispatch_get_main_queue(), ^{
    UIAlertController *toast = [UIAlertController
        alertControllerWithTitle:nil
        message:value
        preferredStyle:UIAlertControllerStyleAlert];
    
    UIViewController *rootVC = RCTPresentedViewController();
    if (rootVC) {
      [rootVC presentViewController:toast animated:YES completion:^{
        dispatch_after(dispatch_time(DISPATCH_TIME_NOW, 2 * NSEC_PER_SEC), dispatch_get_main_queue(), ^{
          [toast dismissViewControllerAnimated:YES completion:nil];
        });
      }];
    }
  });
}

- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
  return std::make_shared<facebook::react::NativeToastSpecJSI>(params);
}

@end
