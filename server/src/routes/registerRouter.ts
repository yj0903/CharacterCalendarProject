import { Router } from 'express';
import { userController } from '../controller';
import { asyncHandler } from '../utils';

export const registerRouter = Router();

//  routing => /register

//계정생성
registerRouter.post('/', asyncHandler(userController.postUser));
//로그인
registerRouter.post('/login', asyncHandler(userController.loginUser));
// 관리자 계정생성
registerRouter.post('/admin', asyncHandler(userController.postManager));
// 이메일 인증
registerRouter.get('/auth/:email', asyncHandler(userController.authEmail));
// 닉네임 중복체크
registerRouter.get('/nickname/:nickname', asyncHandler(userController.checkNickname));
// 토큰 연장
registerRouter.post('/expand/token', asyncHandler(userController.expandAccToken));
//비밀번호 중복체크
registerRouter.post('/check/password', asyncHandler(userController.checkPassword));
