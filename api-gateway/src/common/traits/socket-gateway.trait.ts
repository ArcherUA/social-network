import { ObjectLiteral } from 'typeorm';

export class SocketGatewayTrait {
  public constructor() {}

  protected success(data: any) {
    return {
      status: 'ok',
      data: data,
      error: null,
    };
  }

  protected error(error: any) {
    return {
      status: 'error',
      data: null,
      error: error,
    };
  }

  protected listSockets(server) {
    let ret = [];
    for (let key in server.sockets.connected) {
      ret.push({
        id: server.sockets.connected[key].id,
        query: server.sockets.connected[key].handshake.query,
      });
    }
    return ret;
  }
  protected getSocket(server, key, value) {
    for (let k in server.sockets) {
      if (server.sockets.hasOwnProperty(k)) {
        let socket = server.sockets[k];
        if (socket.handshake.query[key] === value) {
          return socket;
        }
      }
    }
    return null;
  }

  protected validateQuery(
    query: ObjectLiteral,
    requiredKeys: ObjectLiteral,
  ): boolean | ObjectLiteral {
    let errors = {};
    requiredKeys.forEach(key => {
      if (Object.keys(query).indexOf(key) < 0) {
        errors[key] = key + ' is required for this connection';
      }
    });
    if (Object.keys(errors).length > 0) {
      throw this.error(errors);
    }
    return true;
  }
}
