/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  NSURL *jsCodeLocation;

  // 获取js代码的URL
  jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index.ios" fallbackResource:nil];

  // 根据js代码创建View : 以后界面的显示与交互 写在js代码就好
  // 模块名称
  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"ReactDemo"
                                               initialProperties:nil
                                                   launchOptions:launchOptions];
  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];
  
  // 创建窗口
  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  
  // 创建窗口根控制器
  UIViewController *rootViewController = [UIViewController new];
  
  // 设置根控制器的View
  rootViewController.view = rootView;
  
  // 设置窗口跟控制器
  self.window.rootViewController = rootViewController;
  
  // 显示窗口
  [self.window makeKeyAndVisible];
  
  return YES;
}

@end
