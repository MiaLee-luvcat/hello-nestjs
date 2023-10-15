import { NestFactory } from "@nestjs/core";
import { HelloModule } from "./hello.module";

//* NestJS를 시작시키는 함수
async function bootstrap() {
  //* NestFactory를 사용해서 NestApplication 객체 생성
  const app = await NestFactory.create(HelloModule);

  //* 3000번 포트로 서버 기동
  //* npx ts-node-dev src/main.ts
  await app.listen(3000, () => { console.log("서버 시작! http://localhost:3000"); });
}

bootstrap();