// import {
//     WebSocketGateway,
//     OnGatewayConnection,
//     OnGatewayDisconnect,
//     SubscribeMessage,
//     WebSocketServer
// } from '@nestjs/websockets';
//
// import { Log } from '@uk/log';
// import { Socket, Server } from 'socket.io';
// import {
//     WEBSOCKET_PORT,
//     CHUNKS_ROOM,
//     TASK_ROOM,
// } from '../config/index';
//
// import { MessagesEventEnums } from '../common/enums/messages.event.enums'
// import { Injectable, Inject } from '@nestjs/common';
//
// const log = new Log(__filename);
//
// @Injectable()
// @WebSocketGateway(+WEBSOCKET_PORT, task_room_options)
// export class MessagingGateway implements OnGatewayConnection, OnGatewayDisconnect {
//     @WebSocketServer()
//     server: Server;
//     private readonly START = 'MessagingGateway started';
//
//     constructor(
//         private readonly taskService: TaskService,
//     ) {
//         log.info(this.START, {
//             port: WEBSOCKET_PORT,
//             ...task_room_options,
//         });
//     }
//
//     @SubscribeMessage(MessagesEventEnums.START_MESSAGING)
//     async startMessaging(client: Socket, id: number)
//         : Promise<{status: string, data: object, error: object|string|null}>
//     {
//         // console.log("[ > ] New task info event: ", id);
//         try {
//             return {
//                 status: SocketEvent.OK,
//                 data: await this.taskService.renderTask(id),
//                 error: null
//             }
//         } catch (e) {
//             return {
//                 status: SocketEvent.ERROR,
//                 data: null,
//                 error: e
//             }
//         }
//     }
//
//     @SubscribeMessage(SocketEvent.TASK)
//     async handleTASK(client: Socket, requestData: CreateTaskDto)
//         : Promise<{status: string, data: object, error: object|string|null}>
//     {
//         try {
//             let res = await this.taskService.createNewTask(requestData);
//             return {
//                 status: SocketEvent.OK,
//                 data: await this.taskService.renderTask(null, res),
//                 error: null
//             }
//         } catch (e) {
//             return {
//                 status: SocketEvent.ERROR,
//                 data: null,
//                 error: e
//             }
//         }
//     }
//
//     @SubscribeMessage(SocketEvent.UPDATE_TASK_STATUS)
//     async handleUPDATE_TASK_STATUS(client: Socket, data: number): Promise<void> {
//         // console.log("[ > ] New UPDATE_TASK_STATUS event: ");
//         await this.emitUpdateTaskStatus(data);
//     }
//
//     async emitUpdateTaskStatus(taskId: number): Promise<void> {
//         let processedTask = await this.taskService.processTask(taskId);
//         if (processedTask) {
//             this.server.emit(SocketEvent.TASK, {
//                 status: SocketEvent.OK,
//                 data: processedTask,
//                 error: null
//             })
//         }
//     }
//
//     handleConnection(socket: Socket): void {
//         console.log('# TaskGateway # client connected - ', socket.handshake.query.instanceUuid, socket.id);
//     }
//     async handleDisconnect({ id: socketId }: Socket): Promise<void> {}
// }
//
// @WebSocketGateway(+WEBSOCKET_PORT, chunks_room_options)
// export class ChunksGateway implements OnGatewayConnection, OnGatewayDisconnect {
//     @WebSocketServer()
//     server: Server;
//     private readonly START = 'ChunksGateway started';
//     constructor(
//         @Inject(forwardRef(() => TaskService))
//         private readonly taskService: TaskService,
//     ) {
//         log.info(this.START, {
//             port: WEBSOCKET_PORT,
//             ...chunks_room_options,
//         });
//     }
//
//     emitChunkEncode(instanceUuid: string, chunk: TaskChunks): boolean {
//         let instance = getSocket(this.server, instanceUuid);
//         if (instance) {
//             instance.emit(SocketEvent.ENCODE_CHUNK, {
//                 instanceUuid: instanceUuid,
//                 chunk: chunk,
//             });
//             return true;
//         }
//         return false;
//     }
//
//     emitChunkJoin(instanceUuid: string, chunks: TaskChunks[]): boolean {
//         let instance = getSocket(this.server, instanceUuid);
//         if (instance) {
//             instance.emit(SocketEvent.JOIN_TASK, {
//                 instanceUuid: instanceUuid,
//                 chunks: chunks,
//             });
//             return true;
//         }
//         return false;
//     }
//
//     handleConnection(socket: Socket): void {
//         console.log('# ChunksGateway # client connected - ', socket.handshake.query.instanceUuid, socket.id);
//         console.log(socket.handshake.query.instanceUuid);
//     }
//     async handleDisconnect({ id: socketId }: Socket): Promise<void> {}
// }
