import { Tech } from "@/common";
import Cassandra from "@/assets/images/casandra.png";
import Python from "@/assets/images/python.png";
import ReactLogo from "@/assets/images/react.png";
import Aws from "@/assets/images/aws.png";
import Kubernetes from "@/assets/images/Kubernetes.png";
import Grafana from "@/assets/images/graphana.png";
import Ios from "@/assets/images/ios.png";
import Android from "@/assets/images/android.png";
import PyTorch from "@/assets/images/pytorch-logo.png";
import Tensorflow from "@/assets/images/TensorFlow.png";
import JavaScript from "@/assets/images/javascript.png";
import Playwrite from "@/assets/images/playwright-logo.png";
import QA from "@/assets/images/qa.png";
import Flutter from "@/assets/images/flutter.png";
import Notion from "@/assets/images/Notion.png";
import Youtrack from "@/assets/images/YouTrack.png";
import Figma from "@/assets/images/Figma.png";
import Photoshop from "@/assets/images/Photoshop.png";
import AfterEffects from "@/assets/images/Adobe_Illustrator.png";

export const techStack: Tech[] = [
  {
    title: "Backend",
    icons: [Cassandra, Python],
    description: "Python, Go, Postgres, Mongo, Cassandra, Kafka",
  },
  {
    title: "Frontend",
    icons: [ReactLogo],
    description:
      "Typescript, React, TanStack Query, Next.js, Zustand, Redux, MobX, Sass, Vite",
  },
  {
    title: "DevOps",
    icons: [Aws, Kubernetes, Grafana],
    description:
      "Docker, Kubernetes, Prometheus, Grafana, CI/CD, AWS, Azure, Яндекс.Облако",
  },
  {
    title: "iOS",
    icons: [Ios],
    description:
      "Swift, SwiftUI, UIKit, Combine, RxSwift, Firebase, AVFoundation, CoreData Realm",
  },
  {
    title: "Android",
    description:
      "Kotlin, KMP, MVx, Coroutines, Flow, Compose, Dagger, Ktor, Firebase, ExoPlayer",
    icons: [Android],
  },
  {
    title: "ML",
    icons: [PyTorch, Tensorflow],
    description:
      "LLM, Tensorflow, PyTorch, NLP, computer vision, audio processing",
  },
  {
    title: "MLOps",
    description:
      "DVC, MLflow, Tensorflow-Serving, TorchServe, Weights and Biases",
  },
  {
    title: "AQA",
    icons: [JavaScript, Python, Playwrite],
    description: "JS, Python, Playwright, Selenium, Appium, Postman",
  },
  { title: "QA", description: "Qase, Postman, Charles, Fiddler", icons: [QA] },
  {
    title: "Flutter",
    description: "Flutter, Dart, Bloc, Hive, Retrofit, Injectable, Firebase",
    icons: [Android, Flutter],
  },
  {
    title: "Management",
    description: "Jira, Youtrack, PMBOK, Notion, Trello, Google Sheets",
    icons: [Notion, Youtrack],
  },
  {
    title: "Design",
    icons: [Figma, Photoshop, AfterEffects],
    description:
      "Figma, Photoshop, Illustrator, After Effects, Blender, InDesign, Fontlab",
  },
];
