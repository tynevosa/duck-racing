
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Bet
 * 
 */
export type Bet = $Result.DefaultSelection<Prisma.$BetPayload>
/**
 * Model Race
 * 
 */
export type Race = $Result.DefaultSelection<Prisma.$RacePayload>
/**
 * Model Duck
 * 
 */
export type Duck = $Result.DefaultSelection<Prisma.$DuckPayload>
/**
 * Model Auction
 * 
 */
export type Auction = $Result.DefaultSelection<Prisma.$AuctionPayload>
/**
 * Model Deposit
 * 
 */
export type Deposit = $Result.DefaultSelection<Prisma.$DepositPayload>
/**
 * Model Bonus
 * 
 */
export type Bonus = $Result.DefaultSelection<Prisma.$BonusPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bet`: Exposes CRUD operations for the **Bet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bets
    * const bets = await prisma.bet.findMany()
    * ```
    */
  get bet(): Prisma.BetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.race`: Exposes CRUD operations for the **Race** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Races
    * const races = await prisma.race.findMany()
    * ```
    */
  get race(): Prisma.RaceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.duck`: Exposes CRUD operations for the **Duck** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ducks
    * const ducks = await prisma.duck.findMany()
    * ```
    */
  get duck(): Prisma.DuckDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auction`: Exposes CRUD operations for the **Auction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Auctions
    * const auctions = await prisma.auction.findMany()
    * ```
    */
  get auction(): Prisma.AuctionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.deposit`: Exposes CRUD operations for the **Deposit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Deposits
    * const deposits = await prisma.deposit.findMany()
    * ```
    */
  get deposit(): Prisma.DepositDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bonus`: Exposes CRUD operations for the **Bonus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bonuses
    * const bonuses = await prisma.bonus.findMany()
    * ```
    */
  get bonus(): Prisma.BonusDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Bet: 'Bet',
    Race: 'Race',
    Duck: 'Duck',
    Auction: 'Auction',
    Deposit: 'Deposit',
    Bonus: 'Bonus'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "bet" | "race" | "duck" | "auction" | "deposit" | "bonus"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Bet: {
        payload: Prisma.$BetPayload<ExtArgs>
        fields: Prisma.BetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetPayload>
          }
          findFirst: {
            args: Prisma.BetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetPayload>
          }
          findMany: {
            args: Prisma.BetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetPayload>[]
          }
          create: {
            args: Prisma.BetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetPayload>
          }
          createMany: {
            args: Prisma.BetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetPayload>[]
          }
          delete: {
            args: Prisma.BetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetPayload>
          }
          update: {
            args: Prisma.BetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetPayload>
          }
          deleteMany: {
            args: Prisma.BetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetPayload>[]
          }
          upsert: {
            args: Prisma.BetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetPayload>
          }
          aggregate: {
            args: Prisma.BetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBet>
          }
          groupBy: {
            args: Prisma.BetGroupByArgs<ExtArgs>
            result: $Utils.Optional<BetGroupByOutputType>[]
          }
          count: {
            args: Prisma.BetCountArgs<ExtArgs>
            result: $Utils.Optional<BetCountAggregateOutputType> | number
          }
        }
      }
      Race: {
        payload: Prisma.$RacePayload<ExtArgs>
        fields: Prisma.RaceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RaceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RaceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload>
          }
          findFirst: {
            args: Prisma.RaceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RaceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload>
          }
          findMany: {
            args: Prisma.RaceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload>[]
          }
          create: {
            args: Prisma.RaceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload>
          }
          createMany: {
            args: Prisma.RaceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RaceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload>[]
          }
          delete: {
            args: Prisma.RaceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload>
          }
          update: {
            args: Prisma.RaceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload>
          }
          deleteMany: {
            args: Prisma.RaceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RaceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RaceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload>[]
          }
          upsert: {
            args: Prisma.RaceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload>
          }
          aggregate: {
            args: Prisma.RaceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRace>
          }
          groupBy: {
            args: Prisma.RaceGroupByArgs<ExtArgs>
            result: $Utils.Optional<RaceGroupByOutputType>[]
          }
          count: {
            args: Prisma.RaceCountArgs<ExtArgs>
            result: $Utils.Optional<RaceCountAggregateOutputType> | number
          }
        }
      }
      Duck: {
        payload: Prisma.$DuckPayload<ExtArgs>
        fields: Prisma.DuckFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DuckFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DuckPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DuckFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DuckPayload>
          }
          findFirst: {
            args: Prisma.DuckFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DuckPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DuckFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DuckPayload>
          }
          findMany: {
            args: Prisma.DuckFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DuckPayload>[]
          }
          create: {
            args: Prisma.DuckCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DuckPayload>
          }
          createMany: {
            args: Prisma.DuckCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DuckCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DuckPayload>[]
          }
          delete: {
            args: Prisma.DuckDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DuckPayload>
          }
          update: {
            args: Prisma.DuckUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DuckPayload>
          }
          deleteMany: {
            args: Prisma.DuckDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DuckUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DuckUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DuckPayload>[]
          }
          upsert: {
            args: Prisma.DuckUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DuckPayload>
          }
          aggregate: {
            args: Prisma.DuckAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDuck>
          }
          groupBy: {
            args: Prisma.DuckGroupByArgs<ExtArgs>
            result: $Utils.Optional<DuckGroupByOutputType>[]
          }
          count: {
            args: Prisma.DuckCountArgs<ExtArgs>
            result: $Utils.Optional<DuckCountAggregateOutputType> | number
          }
        }
      }
      Auction: {
        payload: Prisma.$AuctionPayload<ExtArgs>
        fields: Prisma.AuctionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuctionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuctionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionPayload>
          }
          findFirst: {
            args: Prisma.AuctionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuctionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionPayload>
          }
          findMany: {
            args: Prisma.AuctionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionPayload>[]
          }
          create: {
            args: Prisma.AuctionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionPayload>
          }
          createMany: {
            args: Prisma.AuctionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuctionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionPayload>[]
          }
          delete: {
            args: Prisma.AuctionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionPayload>
          }
          update: {
            args: Prisma.AuctionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionPayload>
          }
          deleteMany: {
            args: Prisma.AuctionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuctionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuctionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionPayload>[]
          }
          upsert: {
            args: Prisma.AuctionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuctionPayload>
          }
          aggregate: {
            args: Prisma.AuctionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuction>
          }
          groupBy: {
            args: Prisma.AuctionGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuctionGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuctionCountArgs<ExtArgs>
            result: $Utils.Optional<AuctionCountAggregateOutputType> | number
          }
        }
      }
      Deposit: {
        payload: Prisma.$DepositPayload<ExtArgs>
        fields: Prisma.DepositFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DepositFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DepositFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload>
          }
          findFirst: {
            args: Prisma.DepositFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DepositFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload>
          }
          findMany: {
            args: Prisma.DepositFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload>[]
          }
          create: {
            args: Prisma.DepositCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload>
          }
          createMany: {
            args: Prisma.DepositCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DepositCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload>[]
          }
          delete: {
            args: Prisma.DepositDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload>
          }
          update: {
            args: Prisma.DepositUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload>
          }
          deleteMany: {
            args: Prisma.DepositDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DepositUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DepositUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload>[]
          }
          upsert: {
            args: Prisma.DepositUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepositPayload>
          }
          aggregate: {
            args: Prisma.DepositAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeposit>
          }
          groupBy: {
            args: Prisma.DepositGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepositGroupByOutputType>[]
          }
          count: {
            args: Prisma.DepositCountArgs<ExtArgs>
            result: $Utils.Optional<DepositCountAggregateOutputType> | number
          }
        }
      }
      Bonus: {
        payload: Prisma.$BonusPayload<ExtArgs>
        fields: Prisma.BonusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BonusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BonusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BonusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BonusPayload>
          }
          findFirst: {
            args: Prisma.BonusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BonusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BonusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BonusPayload>
          }
          findMany: {
            args: Prisma.BonusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BonusPayload>[]
          }
          create: {
            args: Prisma.BonusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BonusPayload>
          }
          createMany: {
            args: Prisma.BonusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BonusCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BonusPayload>[]
          }
          delete: {
            args: Prisma.BonusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BonusPayload>
          }
          update: {
            args: Prisma.BonusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BonusPayload>
          }
          deleteMany: {
            args: Prisma.BonusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BonusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BonusUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BonusPayload>[]
          }
          upsert: {
            args: Prisma.BonusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BonusPayload>
          }
          aggregate: {
            args: Prisma.BonusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBonus>
          }
          groupBy: {
            args: Prisma.BonusGroupByArgs<ExtArgs>
            result: $Utils.Optional<BonusGroupByOutputType>[]
          }
          count: {
            args: Prisma.BonusCountArgs<ExtArgs>
            result: $Utils.Optional<BonusCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    bet?: BetOmit
    race?: RaceOmit
    duck?: DuckOmit
    auction?: AuctionOmit
    deposit?: DepositOmit
    bonus?: BonusOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Bets: number
    Auction: number
    Duck: number
    Deposit: number
    Bonus: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Bets?: boolean | UserCountOutputTypeCountBetsArgs
    Auction?: boolean | UserCountOutputTypeCountAuctionArgs
    Duck?: boolean | UserCountOutputTypeCountDuckArgs
    Deposit?: boolean | UserCountOutputTypeCountDepositArgs
    Bonus?: boolean | UserCountOutputTypeCountBonusArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BetWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAuctionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuctionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDuckArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DuckWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDepositArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepositWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBonusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BonusWhereInput
  }


  /**
   * Count Type RaceCountOutputType
   */

  export type RaceCountOutputType = {
    bets: number
  }

  export type RaceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bets?: boolean | RaceCountOutputTypeCountBetsArgs
  }

  // Custom InputTypes
  /**
   * RaceCountOutputType without action
   */
  export type RaceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceCountOutputType
     */
    select?: RaceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RaceCountOutputType without action
   */
  export type RaceCountOutputTypeCountBetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BetWhereInput
  }


  /**
   * Count Type DuckCountOutputType
   */

  export type DuckCountOutputType = {
    Bet: number
    Auction: number
  }

  export type DuckCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Bet?: boolean | DuckCountOutputTypeCountBetArgs
    Auction?: boolean | DuckCountOutputTypeCountAuctionArgs
  }

  // Custom InputTypes
  /**
   * DuckCountOutputType without action
   */
  export type DuckCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DuckCountOutputType
     */
    select?: DuckCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DuckCountOutputType without action
   */
  export type DuckCountOutputTypeCountBetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BetWhereInput
  }

  /**
   * DuckCountOutputType without action
   */
  export type DuckCountOutputTypeCountAuctionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuctionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    balance: number | null
  }

  export type UserSumAggregateOutputType = {
    balance: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    wallet: string | null
    referralCode: string | null
    referredBy: string | null
    balance: number | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    wallet: string | null
    referralCode: string | null
    referredBy: string | null
    balance: number | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    wallet: number
    referralCode: number
    referredBy: number
    balance: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    balance?: true
  }

  export type UserSumAggregateInputType = {
    balance?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    wallet?: true
    referralCode?: true
    referredBy?: true
    balance?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    wallet?: true
    referralCode?: true
    referredBy?: true
    balance?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    wallet?: true
    referralCode?: true
    referredBy?: true
    balance?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    wallet: string
    referralCode: string
    referredBy: string | null
    balance: number
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    wallet?: boolean
    referralCode?: boolean
    referredBy?: boolean
    balance?: boolean
    createdAt?: boolean
    Bets?: boolean | User$BetsArgs<ExtArgs>
    Auction?: boolean | User$AuctionArgs<ExtArgs>
    Duck?: boolean | User$DuckArgs<ExtArgs>
    Deposit?: boolean | User$DepositArgs<ExtArgs>
    Bonus?: boolean | User$BonusArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    wallet?: boolean
    referralCode?: boolean
    referredBy?: boolean
    balance?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    wallet?: boolean
    referralCode?: boolean
    referredBy?: boolean
    balance?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    wallet?: boolean
    referralCode?: boolean
    referredBy?: boolean
    balance?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "wallet" | "referralCode" | "referredBy" | "balance" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Bets?: boolean | User$BetsArgs<ExtArgs>
    Auction?: boolean | User$AuctionArgs<ExtArgs>
    Duck?: boolean | User$DuckArgs<ExtArgs>
    Deposit?: boolean | User$DepositArgs<ExtArgs>
    Bonus?: boolean | User$BonusArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Bets: Prisma.$BetPayload<ExtArgs>[]
      Auction: Prisma.$AuctionPayload<ExtArgs>[]
      Duck: Prisma.$DuckPayload<ExtArgs>[]
      Deposit: Prisma.$DepositPayload<ExtArgs>[]
      Bonus: Prisma.$BonusPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      wallet: string
      referralCode: string
      referredBy: string | null
      balance: number
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Bets<T extends User$BetsArgs<ExtArgs> = {}>(args?: Subset<T, User$BetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Auction<T extends User$AuctionArgs<ExtArgs> = {}>(args?: Subset<T, User$AuctionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuctionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Duck<T extends User$DuckArgs<ExtArgs> = {}>(args?: Subset<T, User$DuckArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DuckPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Deposit<T extends User$DepositArgs<ExtArgs> = {}>(args?: Subset<T, User$DepositArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Bonus<T extends User$BonusArgs<ExtArgs> = {}>(args?: Subset<T, User$BonusArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BonusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly wallet: FieldRef<"User", 'String'>
    readonly referralCode: FieldRef<"User", 'String'>
    readonly referredBy: FieldRef<"User", 'String'>
    readonly balance: FieldRef<"User", 'Float'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.Bets
   */
  export type User$BetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bet
     */
    omit?: BetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetInclude<ExtArgs> | null
    where?: BetWhereInput
    orderBy?: BetOrderByWithRelationInput | BetOrderByWithRelationInput[]
    cursor?: BetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BetScalarFieldEnum | BetScalarFieldEnum[]
  }

  /**
   * User.Auction
   */
  export type User$AuctionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auction
     */
    select?: AuctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auction
     */
    omit?: AuctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionInclude<ExtArgs> | null
    where?: AuctionWhereInput
    orderBy?: AuctionOrderByWithRelationInput | AuctionOrderByWithRelationInput[]
    cursor?: AuctionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuctionScalarFieldEnum | AuctionScalarFieldEnum[]
  }

  /**
   * User.Duck
   */
  export type User$DuckArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Duck
     */
    select?: DuckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Duck
     */
    omit?: DuckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DuckInclude<ExtArgs> | null
    where?: DuckWhereInput
    orderBy?: DuckOrderByWithRelationInput | DuckOrderByWithRelationInput[]
    cursor?: DuckWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DuckScalarFieldEnum | DuckScalarFieldEnum[]
  }

  /**
   * User.Deposit
   */
  export type User$DepositArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deposit
     */
    omit?: DepositOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    where?: DepositWhereInput
    orderBy?: DepositOrderByWithRelationInput | DepositOrderByWithRelationInput[]
    cursor?: DepositWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DepositScalarFieldEnum | DepositScalarFieldEnum[]
  }

  /**
   * User.Bonus
   */
  export type User$BonusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bonus
     */
    select?: BonusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bonus
     */
    omit?: BonusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BonusInclude<ExtArgs> | null
    where?: BonusWhereInput
    orderBy?: BonusOrderByWithRelationInput | BonusOrderByWithRelationInput[]
    cursor?: BonusWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BonusScalarFieldEnum | BonusScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Bet
   */

  export type AggregateBet = {
    _count: BetCountAggregateOutputType | null
    _avg: BetAvgAggregateOutputType | null
    _sum: BetSumAggregateOutputType | null
    _min: BetMinAggregateOutputType | null
    _max: BetMaxAggregateOutputType | null
  }

  export type BetAvgAggregateOutputType = {
    amount: number | null
  }

  export type BetSumAggregateOutputType = {
    amount: number | null
  }

  export type BetMinAggregateOutputType = {
    id: string | null
    betType: string | null
    amount: number | null
    createdAt: Date | null
    duckId: string | null
    userId: string | null
    raceId: string | null
  }

  export type BetMaxAggregateOutputType = {
    id: string | null
    betType: string | null
    amount: number | null
    createdAt: Date | null
    duckId: string | null
    userId: string | null
    raceId: string | null
  }

  export type BetCountAggregateOutputType = {
    id: number
    betType: number
    amount: number
    createdAt: number
    duckId: number
    userId: number
    raceId: number
    _all: number
  }


  export type BetAvgAggregateInputType = {
    amount?: true
  }

  export type BetSumAggregateInputType = {
    amount?: true
  }

  export type BetMinAggregateInputType = {
    id?: true
    betType?: true
    amount?: true
    createdAt?: true
    duckId?: true
    userId?: true
    raceId?: true
  }

  export type BetMaxAggregateInputType = {
    id?: true
    betType?: true
    amount?: true
    createdAt?: true
    duckId?: true
    userId?: true
    raceId?: true
  }

  export type BetCountAggregateInputType = {
    id?: true
    betType?: true
    amount?: true
    createdAt?: true
    duckId?: true
    userId?: true
    raceId?: true
    _all?: true
  }

  export type BetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bet to aggregate.
     */
    where?: BetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bets to fetch.
     */
    orderBy?: BetOrderByWithRelationInput | BetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bets
    **/
    _count?: true | BetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BetMaxAggregateInputType
  }

  export type GetBetAggregateType<T extends BetAggregateArgs> = {
        [P in keyof T & keyof AggregateBet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBet[P]>
      : GetScalarType<T[P], AggregateBet[P]>
  }




  export type BetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BetWhereInput
    orderBy?: BetOrderByWithAggregationInput | BetOrderByWithAggregationInput[]
    by: BetScalarFieldEnum[] | BetScalarFieldEnum
    having?: BetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BetCountAggregateInputType | true
    _avg?: BetAvgAggregateInputType
    _sum?: BetSumAggregateInputType
    _min?: BetMinAggregateInputType
    _max?: BetMaxAggregateInputType
  }

  export type BetGroupByOutputType = {
    id: string
    betType: string
    amount: number
    createdAt: Date
    duckId: string
    userId: string
    raceId: string
    _count: BetCountAggregateOutputType | null
    _avg: BetAvgAggregateOutputType | null
    _sum: BetSumAggregateOutputType | null
    _min: BetMinAggregateOutputType | null
    _max: BetMaxAggregateOutputType | null
  }

  type GetBetGroupByPayload<T extends BetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BetGroupByOutputType[P]>
            : GetScalarType<T[P], BetGroupByOutputType[P]>
        }
      >
    >


  export type BetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    betType?: boolean
    amount?: boolean
    createdAt?: boolean
    duckId?: boolean
    userId?: boolean
    raceId?: boolean
    duck?: boolean | DuckDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    Race?: boolean | RaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bet"]>

  export type BetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    betType?: boolean
    amount?: boolean
    createdAt?: boolean
    duckId?: boolean
    userId?: boolean
    raceId?: boolean
    duck?: boolean | DuckDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    Race?: boolean | RaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bet"]>

  export type BetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    betType?: boolean
    amount?: boolean
    createdAt?: boolean
    duckId?: boolean
    userId?: boolean
    raceId?: boolean
    duck?: boolean | DuckDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    Race?: boolean | RaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bet"]>

  export type BetSelectScalar = {
    id?: boolean
    betType?: boolean
    amount?: boolean
    createdAt?: boolean
    duckId?: boolean
    userId?: boolean
    raceId?: boolean
  }

  export type BetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "betType" | "amount" | "createdAt" | "duckId" | "userId" | "raceId", ExtArgs["result"]["bet"]>
  export type BetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    duck?: boolean | DuckDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    Race?: boolean | RaceDefaultArgs<ExtArgs>
  }
  export type BetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    duck?: boolean | DuckDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    Race?: boolean | RaceDefaultArgs<ExtArgs>
  }
  export type BetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    duck?: boolean | DuckDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    Race?: boolean | RaceDefaultArgs<ExtArgs>
  }

  export type $BetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bet"
    objects: {
      duck: Prisma.$DuckPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      Race: Prisma.$RacePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      betType: string
      amount: number
      createdAt: Date
      duckId: string
      userId: string
      raceId: string
    }, ExtArgs["result"]["bet"]>
    composites: {}
  }

  type BetGetPayload<S extends boolean | null | undefined | BetDefaultArgs> = $Result.GetResult<Prisma.$BetPayload, S>

  type BetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BetCountAggregateInputType | true
    }

  export interface BetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bet'], meta: { name: 'Bet' } }
    /**
     * Find zero or one Bet that matches the filter.
     * @param {BetFindUniqueArgs} args - Arguments to find a Bet
     * @example
     * // Get one Bet
     * const bet = await prisma.bet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BetFindUniqueArgs>(args: SelectSubset<T, BetFindUniqueArgs<ExtArgs>>): Prisma__BetClient<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BetFindUniqueOrThrowArgs} args - Arguments to find a Bet
     * @example
     * // Get one Bet
     * const bet = await prisma.bet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BetFindUniqueOrThrowArgs>(args: SelectSubset<T, BetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BetClient<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetFindFirstArgs} args - Arguments to find a Bet
     * @example
     * // Get one Bet
     * const bet = await prisma.bet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BetFindFirstArgs>(args?: SelectSubset<T, BetFindFirstArgs<ExtArgs>>): Prisma__BetClient<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetFindFirstOrThrowArgs} args - Arguments to find a Bet
     * @example
     * // Get one Bet
     * const bet = await prisma.bet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BetFindFirstOrThrowArgs>(args?: SelectSubset<T, BetFindFirstOrThrowArgs<ExtArgs>>): Prisma__BetClient<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bets
     * const bets = await prisma.bet.findMany()
     * 
     * // Get first 10 Bets
     * const bets = await prisma.bet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const betWithIdOnly = await prisma.bet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BetFindManyArgs>(args?: SelectSubset<T, BetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bet.
     * @param {BetCreateArgs} args - Arguments to create a Bet.
     * @example
     * // Create one Bet
     * const Bet = await prisma.bet.create({
     *   data: {
     *     // ... data to create a Bet
     *   }
     * })
     * 
     */
    create<T extends BetCreateArgs>(args: SelectSubset<T, BetCreateArgs<ExtArgs>>): Prisma__BetClient<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bets.
     * @param {BetCreateManyArgs} args - Arguments to create many Bets.
     * @example
     * // Create many Bets
     * const bet = await prisma.bet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BetCreateManyArgs>(args?: SelectSubset<T, BetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bets and returns the data saved in the database.
     * @param {BetCreateManyAndReturnArgs} args - Arguments to create many Bets.
     * @example
     * // Create many Bets
     * const bet = await prisma.bet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bets and only return the `id`
     * const betWithIdOnly = await prisma.bet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BetCreateManyAndReturnArgs>(args?: SelectSubset<T, BetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bet.
     * @param {BetDeleteArgs} args - Arguments to delete one Bet.
     * @example
     * // Delete one Bet
     * const Bet = await prisma.bet.delete({
     *   where: {
     *     // ... filter to delete one Bet
     *   }
     * })
     * 
     */
    delete<T extends BetDeleteArgs>(args: SelectSubset<T, BetDeleteArgs<ExtArgs>>): Prisma__BetClient<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bet.
     * @param {BetUpdateArgs} args - Arguments to update one Bet.
     * @example
     * // Update one Bet
     * const bet = await prisma.bet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BetUpdateArgs>(args: SelectSubset<T, BetUpdateArgs<ExtArgs>>): Prisma__BetClient<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bets.
     * @param {BetDeleteManyArgs} args - Arguments to filter Bets to delete.
     * @example
     * // Delete a few Bets
     * const { count } = await prisma.bet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BetDeleteManyArgs>(args?: SelectSubset<T, BetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bets
     * const bet = await prisma.bet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BetUpdateManyArgs>(args: SelectSubset<T, BetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bets and returns the data updated in the database.
     * @param {BetUpdateManyAndReturnArgs} args - Arguments to update many Bets.
     * @example
     * // Update many Bets
     * const bet = await prisma.bet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bets and only return the `id`
     * const betWithIdOnly = await prisma.bet.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BetUpdateManyAndReturnArgs>(args: SelectSubset<T, BetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bet.
     * @param {BetUpsertArgs} args - Arguments to update or create a Bet.
     * @example
     * // Update or create a Bet
     * const bet = await prisma.bet.upsert({
     *   create: {
     *     // ... data to create a Bet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bet we want to update
     *   }
     * })
     */
    upsert<T extends BetUpsertArgs>(args: SelectSubset<T, BetUpsertArgs<ExtArgs>>): Prisma__BetClient<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetCountArgs} args - Arguments to filter Bets to count.
     * @example
     * // Count the number of Bets
     * const count = await prisma.bet.count({
     *   where: {
     *     // ... the filter for the Bets we want to count
     *   }
     * })
    **/
    count<T extends BetCountArgs>(
      args?: Subset<T, BetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BetAggregateArgs>(args: Subset<T, BetAggregateArgs>): Prisma.PrismaPromise<GetBetAggregateType<T>>

    /**
     * Group by Bet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BetGroupByArgs['orderBy'] }
        : { orderBy?: BetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bet model
   */
  readonly fields: BetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    duck<T extends DuckDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DuckDefaultArgs<ExtArgs>>): Prisma__DuckClient<$Result.GetResult<Prisma.$DuckPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Race<T extends RaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RaceDefaultArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Bet model
   */
  interface BetFieldRefs {
    readonly id: FieldRef<"Bet", 'String'>
    readonly betType: FieldRef<"Bet", 'String'>
    readonly amount: FieldRef<"Bet", 'Float'>
    readonly createdAt: FieldRef<"Bet", 'DateTime'>
    readonly duckId: FieldRef<"Bet", 'String'>
    readonly userId: FieldRef<"Bet", 'String'>
    readonly raceId: FieldRef<"Bet", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Bet findUnique
   */
  export type BetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bet
     */
    omit?: BetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetInclude<ExtArgs> | null
    /**
     * Filter, which Bet to fetch.
     */
    where: BetWhereUniqueInput
  }

  /**
   * Bet findUniqueOrThrow
   */
  export type BetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bet
     */
    omit?: BetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetInclude<ExtArgs> | null
    /**
     * Filter, which Bet to fetch.
     */
    where: BetWhereUniqueInput
  }

  /**
   * Bet findFirst
   */
  export type BetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bet
     */
    omit?: BetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetInclude<ExtArgs> | null
    /**
     * Filter, which Bet to fetch.
     */
    where?: BetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bets to fetch.
     */
    orderBy?: BetOrderByWithRelationInput | BetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bets.
     */
    cursor?: BetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bets.
     */
    distinct?: BetScalarFieldEnum | BetScalarFieldEnum[]
  }

  /**
   * Bet findFirstOrThrow
   */
  export type BetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bet
     */
    omit?: BetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetInclude<ExtArgs> | null
    /**
     * Filter, which Bet to fetch.
     */
    where?: BetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bets to fetch.
     */
    orderBy?: BetOrderByWithRelationInput | BetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bets.
     */
    cursor?: BetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bets.
     */
    distinct?: BetScalarFieldEnum | BetScalarFieldEnum[]
  }

  /**
   * Bet findMany
   */
  export type BetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bet
     */
    omit?: BetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetInclude<ExtArgs> | null
    /**
     * Filter, which Bets to fetch.
     */
    where?: BetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bets to fetch.
     */
    orderBy?: BetOrderByWithRelationInput | BetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bets.
     */
    cursor?: BetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bets.
     */
    skip?: number
    distinct?: BetScalarFieldEnum | BetScalarFieldEnum[]
  }

  /**
   * Bet create
   */
  export type BetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bet
     */
    omit?: BetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetInclude<ExtArgs> | null
    /**
     * The data needed to create a Bet.
     */
    data: XOR<BetCreateInput, BetUncheckedCreateInput>
  }

  /**
   * Bet createMany
   */
  export type BetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bets.
     */
    data: BetCreateManyInput | BetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bet createManyAndReturn
   */
  export type BetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bet
     */
    omit?: BetOmit<ExtArgs> | null
    /**
     * The data used to create many Bets.
     */
    data: BetCreateManyInput | BetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bet update
   */
  export type BetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bet
     */
    omit?: BetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetInclude<ExtArgs> | null
    /**
     * The data needed to update a Bet.
     */
    data: XOR<BetUpdateInput, BetUncheckedUpdateInput>
    /**
     * Choose, which Bet to update.
     */
    where: BetWhereUniqueInput
  }

  /**
   * Bet updateMany
   */
  export type BetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bets.
     */
    data: XOR<BetUpdateManyMutationInput, BetUncheckedUpdateManyInput>
    /**
     * Filter which Bets to update
     */
    where?: BetWhereInput
    /**
     * Limit how many Bets to update.
     */
    limit?: number
  }

  /**
   * Bet updateManyAndReturn
   */
  export type BetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bet
     */
    omit?: BetOmit<ExtArgs> | null
    /**
     * The data used to update Bets.
     */
    data: XOR<BetUpdateManyMutationInput, BetUncheckedUpdateManyInput>
    /**
     * Filter which Bets to update
     */
    where?: BetWhereInput
    /**
     * Limit how many Bets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bet upsert
   */
  export type BetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bet
     */
    omit?: BetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetInclude<ExtArgs> | null
    /**
     * The filter to search for the Bet to update in case it exists.
     */
    where: BetWhereUniqueInput
    /**
     * In case the Bet found by the `where` argument doesn't exist, create a new Bet with this data.
     */
    create: XOR<BetCreateInput, BetUncheckedCreateInput>
    /**
     * In case the Bet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BetUpdateInput, BetUncheckedUpdateInput>
  }

  /**
   * Bet delete
   */
  export type BetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bet
     */
    omit?: BetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetInclude<ExtArgs> | null
    /**
     * Filter which Bet to delete.
     */
    where: BetWhereUniqueInput
  }

  /**
   * Bet deleteMany
   */
  export type BetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bets to delete
     */
    where?: BetWhereInput
    /**
     * Limit how many Bets to delete.
     */
    limit?: number
  }

  /**
   * Bet without action
   */
  export type BetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bet
     */
    omit?: BetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetInclude<ExtArgs> | null
  }


  /**
   * Model Race
   */

  export type AggregateRace = {
    _count: RaceCountAggregateOutputType | null
    _avg: RaceAvgAggregateOutputType | null
    _sum: RaceSumAggregateOutputType | null
    _min: RaceMinAggregateOutputType | null
    _max: RaceMaxAggregateOutputType | null
  }

  export type RaceAvgAggregateOutputType = {
    totalWin: number | null
    totalPlace: number | null
    totalShow: number | null
  }

  export type RaceSumAggregateOutputType = {
    totalWin: number | null
    totalPlace: number | null
    totalShow: number | null
  }

  export type RaceMinAggregateOutputType = {
    id: string | null
    status: string | null
    liveStream: string | null
    totalWin: number | null
    totalPlace: number | null
    totalShow: number | null
    expiredAt: Date | null
    createdAt: Date | null
  }

  export type RaceMaxAggregateOutputType = {
    id: string | null
    status: string | null
    liveStream: string | null
    totalWin: number | null
    totalPlace: number | null
    totalShow: number | null
    expiredAt: Date | null
    createdAt: Date | null
  }

  export type RaceCountAggregateOutputType = {
    id: number
    status: number
    liveStream: number
    result: number
    totalWin: number
    totalPlace: number
    totalShow: number
    expiredAt: number
    createdAt: number
    _all: number
  }


  export type RaceAvgAggregateInputType = {
    totalWin?: true
    totalPlace?: true
    totalShow?: true
  }

  export type RaceSumAggregateInputType = {
    totalWin?: true
    totalPlace?: true
    totalShow?: true
  }

  export type RaceMinAggregateInputType = {
    id?: true
    status?: true
    liveStream?: true
    totalWin?: true
    totalPlace?: true
    totalShow?: true
    expiredAt?: true
    createdAt?: true
  }

  export type RaceMaxAggregateInputType = {
    id?: true
    status?: true
    liveStream?: true
    totalWin?: true
    totalPlace?: true
    totalShow?: true
    expiredAt?: true
    createdAt?: true
  }

  export type RaceCountAggregateInputType = {
    id?: true
    status?: true
    liveStream?: true
    result?: true
    totalWin?: true
    totalPlace?: true
    totalShow?: true
    expiredAt?: true
    createdAt?: true
    _all?: true
  }

  export type RaceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Race to aggregate.
     */
    where?: RaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Races to fetch.
     */
    orderBy?: RaceOrderByWithRelationInput | RaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Races from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Races.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Races
    **/
    _count?: true | RaceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RaceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RaceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RaceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RaceMaxAggregateInputType
  }

  export type GetRaceAggregateType<T extends RaceAggregateArgs> = {
        [P in keyof T & keyof AggregateRace]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRace[P]>
      : GetScalarType<T[P], AggregateRace[P]>
  }




  export type RaceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RaceWhereInput
    orderBy?: RaceOrderByWithAggregationInput | RaceOrderByWithAggregationInput[]
    by: RaceScalarFieldEnum[] | RaceScalarFieldEnum
    having?: RaceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RaceCountAggregateInputType | true
    _avg?: RaceAvgAggregateInputType
    _sum?: RaceSumAggregateInputType
    _min?: RaceMinAggregateInputType
    _max?: RaceMaxAggregateInputType
  }

  export type RaceGroupByOutputType = {
    id: string
    status: string
    liveStream: string
    result: string[]
    totalWin: number
    totalPlace: number
    totalShow: number
    expiredAt: Date
    createdAt: Date
    _count: RaceCountAggregateOutputType | null
    _avg: RaceAvgAggregateOutputType | null
    _sum: RaceSumAggregateOutputType | null
    _min: RaceMinAggregateOutputType | null
    _max: RaceMaxAggregateOutputType | null
  }

  type GetRaceGroupByPayload<T extends RaceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RaceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RaceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RaceGroupByOutputType[P]>
            : GetScalarType<T[P], RaceGroupByOutputType[P]>
        }
      >
    >


  export type RaceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    liveStream?: boolean
    result?: boolean
    totalWin?: boolean
    totalPlace?: boolean
    totalShow?: boolean
    expiredAt?: boolean
    createdAt?: boolean
    bets?: boolean | Race$betsArgs<ExtArgs>
    _count?: boolean | RaceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["race"]>

  export type RaceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    liveStream?: boolean
    result?: boolean
    totalWin?: boolean
    totalPlace?: boolean
    totalShow?: boolean
    expiredAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["race"]>

  export type RaceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    liveStream?: boolean
    result?: boolean
    totalWin?: boolean
    totalPlace?: boolean
    totalShow?: boolean
    expiredAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["race"]>

  export type RaceSelectScalar = {
    id?: boolean
    status?: boolean
    liveStream?: boolean
    result?: boolean
    totalWin?: boolean
    totalPlace?: boolean
    totalShow?: boolean
    expiredAt?: boolean
    createdAt?: boolean
  }

  export type RaceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "status" | "liveStream" | "result" | "totalWin" | "totalPlace" | "totalShow" | "expiredAt" | "createdAt", ExtArgs["result"]["race"]>
  export type RaceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bets?: boolean | Race$betsArgs<ExtArgs>
    _count?: boolean | RaceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RaceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RaceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RacePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Race"
    objects: {
      bets: Prisma.$BetPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      status: string
      liveStream: string
      result: string[]
      totalWin: number
      totalPlace: number
      totalShow: number
      expiredAt: Date
      createdAt: Date
    }, ExtArgs["result"]["race"]>
    composites: {}
  }

  type RaceGetPayload<S extends boolean | null | undefined | RaceDefaultArgs> = $Result.GetResult<Prisma.$RacePayload, S>

  type RaceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RaceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RaceCountAggregateInputType | true
    }

  export interface RaceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Race'], meta: { name: 'Race' } }
    /**
     * Find zero or one Race that matches the filter.
     * @param {RaceFindUniqueArgs} args - Arguments to find a Race
     * @example
     * // Get one Race
     * const race = await prisma.race.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RaceFindUniqueArgs>(args: SelectSubset<T, RaceFindUniqueArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Race that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RaceFindUniqueOrThrowArgs} args - Arguments to find a Race
     * @example
     * // Get one Race
     * const race = await prisma.race.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RaceFindUniqueOrThrowArgs>(args: SelectSubset<T, RaceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Race that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceFindFirstArgs} args - Arguments to find a Race
     * @example
     * // Get one Race
     * const race = await prisma.race.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RaceFindFirstArgs>(args?: SelectSubset<T, RaceFindFirstArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Race that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceFindFirstOrThrowArgs} args - Arguments to find a Race
     * @example
     * // Get one Race
     * const race = await prisma.race.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RaceFindFirstOrThrowArgs>(args?: SelectSubset<T, RaceFindFirstOrThrowArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Races that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Races
     * const races = await prisma.race.findMany()
     * 
     * // Get first 10 Races
     * const races = await prisma.race.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const raceWithIdOnly = await prisma.race.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RaceFindManyArgs>(args?: SelectSubset<T, RaceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Race.
     * @param {RaceCreateArgs} args - Arguments to create a Race.
     * @example
     * // Create one Race
     * const Race = await prisma.race.create({
     *   data: {
     *     // ... data to create a Race
     *   }
     * })
     * 
     */
    create<T extends RaceCreateArgs>(args: SelectSubset<T, RaceCreateArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Races.
     * @param {RaceCreateManyArgs} args - Arguments to create many Races.
     * @example
     * // Create many Races
     * const race = await prisma.race.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RaceCreateManyArgs>(args?: SelectSubset<T, RaceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Races and returns the data saved in the database.
     * @param {RaceCreateManyAndReturnArgs} args - Arguments to create many Races.
     * @example
     * // Create many Races
     * const race = await prisma.race.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Races and only return the `id`
     * const raceWithIdOnly = await prisma.race.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RaceCreateManyAndReturnArgs>(args?: SelectSubset<T, RaceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Race.
     * @param {RaceDeleteArgs} args - Arguments to delete one Race.
     * @example
     * // Delete one Race
     * const Race = await prisma.race.delete({
     *   where: {
     *     // ... filter to delete one Race
     *   }
     * })
     * 
     */
    delete<T extends RaceDeleteArgs>(args: SelectSubset<T, RaceDeleteArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Race.
     * @param {RaceUpdateArgs} args - Arguments to update one Race.
     * @example
     * // Update one Race
     * const race = await prisma.race.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RaceUpdateArgs>(args: SelectSubset<T, RaceUpdateArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Races.
     * @param {RaceDeleteManyArgs} args - Arguments to filter Races to delete.
     * @example
     * // Delete a few Races
     * const { count } = await prisma.race.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RaceDeleteManyArgs>(args?: SelectSubset<T, RaceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Races.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Races
     * const race = await prisma.race.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RaceUpdateManyArgs>(args: SelectSubset<T, RaceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Races and returns the data updated in the database.
     * @param {RaceUpdateManyAndReturnArgs} args - Arguments to update many Races.
     * @example
     * // Update many Races
     * const race = await prisma.race.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Races and only return the `id`
     * const raceWithIdOnly = await prisma.race.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RaceUpdateManyAndReturnArgs>(args: SelectSubset<T, RaceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Race.
     * @param {RaceUpsertArgs} args - Arguments to update or create a Race.
     * @example
     * // Update or create a Race
     * const race = await prisma.race.upsert({
     *   create: {
     *     // ... data to create a Race
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Race we want to update
     *   }
     * })
     */
    upsert<T extends RaceUpsertArgs>(args: SelectSubset<T, RaceUpsertArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Races.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceCountArgs} args - Arguments to filter Races to count.
     * @example
     * // Count the number of Races
     * const count = await prisma.race.count({
     *   where: {
     *     // ... the filter for the Races we want to count
     *   }
     * })
    **/
    count<T extends RaceCountArgs>(
      args?: Subset<T, RaceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RaceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Race.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RaceAggregateArgs>(args: Subset<T, RaceAggregateArgs>): Prisma.PrismaPromise<GetRaceAggregateType<T>>

    /**
     * Group by Race.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RaceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RaceGroupByArgs['orderBy'] }
        : { orderBy?: RaceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RaceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRaceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Race model
   */
  readonly fields: RaceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Race.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RaceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bets<T extends Race$betsArgs<ExtArgs> = {}>(args?: Subset<T, Race$betsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Race model
   */
  interface RaceFieldRefs {
    readonly id: FieldRef<"Race", 'String'>
    readonly status: FieldRef<"Race", 'String'>
    readonly liveStream: FieldRef<"Race", 'String'>
    readonly result: FieldRef<"Race", 'String[]'>
    readonly totalWin: FieldRef<"Race", 'Float'>
    readonly totalPlace: FieldRef<"Race", 'Float'>
    readonly totalShow: FieldRef<"Race", 'Float'>
    readonly expiredAt: FieldRef<"Race", 'DateTime'>
    readonly createdAt: FieldRef<"Race", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Race findUnique
   */
  export type RaceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
    /**
     * Filter, which Race to fetch.
     */
    where: RaceWhereUniqueInput
  }

  /**
   * Race findUniqueOrThrow
   */
  export type RaceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
    /**
     * Filter, which Race to fetch.
     */
    where: RaceWhereUniqueInput
  }

  /**
   * Race findFirst
   */
  export type RaceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
    /**
     * Filter, which Race to fetch.
     */
    where?: RaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Races to fetch.
     */
    orderBy?: RaceOrderByWithRelationInput | RaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Races.
     */
    cursor?: RaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Races from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Races.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Races.
     */
    distinct?: RaceScalarFieldEnum | RaceScalarFieldEnum[]
  }

  /**
   * Race findFirstOrThrow
   */
  export type RaceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
    /**
     * Filter, which Race to fetch.
     */
    where?: RaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Races to fetch.
     */
    orderBy?: RaceOrderByWithRelationInput | RaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Races.
     */
    cursor?: RaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Races from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Races.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Races.
     */
    distinct?: RaceScalarFieldEnum | RaceScalarFieldEnum[]
  }

  /**
   * Race findMany
   */
  export type RaceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
    /**
     * Filter, which Races to fetch.
     */
    where?: RaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Races to fetch.
     */
    orderBy?: RaceOrderByWithRelationInput | RaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Races.
     */
    cursor?: RaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Races from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Races.
     */
    skip?: number
    distinct?: RaceScalarFieldEnum | RaceScalarFieldEnum[]
  }

  /**
   * Race create
   */
  export type RaceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
    /**
     * The data needed to create a Race.
     */
    data: XOR<RaceCreateInput, RaceUncheckedCreateInput>
  }

  /**
   * Race createMany
   */
  export type RaceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Races.
     */
    data: RaceCreateManyInput | RaceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Race createManyAndReturn
   */
  export type RaceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * The data used to create many Races.
     */
    data: RaceCreateManyInput | RaceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Race update
   */
  export type RaceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
    /**
     * The data needed to update a Race.
     */
    data: XOR<RaceUpdateInput, RaceUncheckedUpdateInput>
    /**
     * Choose, which Race to update.
     */
    where: RaceWhereUniqueInput
  }

  /**
   * Race updateMany
   */
  export type RaceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Races.
     */
    data: XOR<RaceUpdateManyMutationInput, RaceUncheckedUpdateManyInput>
    /**
     * Filter which Races to update
     */
    where?: RaceWhereInput
    /**
     * Limit how many Races to update.
     */
    limit?: number
  }

  /**
   * Race updateManyAndReturn
   */
  export type RaceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * The data used to update Races.
     */
    data: XOR<RaceUpdateManyMutationInput, RaceUncheckedUpdateManyInput>
    /**
     * Filter which Races to update
     */
    where?: RaceWhereInput
    /**
     * Limit how many Races to update.
     */
    limit?: number
  }

  /**
   * Race upsert
   */
  export type RaceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
    /**
     * The filter to search for the Race to update in case it exists.
     */
    where: RaceWhereUniqueInput
    /**
     * In case the Race found by the `where` argument doesn't exist, create a new Race with this data.
     */
    create: XOR<RaceCreateInput, RaceUncheckedCreateInput>
    /**
     * In case the Race was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RaceUpdateInput, RaceUncheckedUpdateInput>
  }

  /**
   * Race delete
   */
  export type RaceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
    /**
     * Filter which Race to delete.
     */
    where: RaceWhereUniqueInput
  }

  /**
   * Race deleteMany
   */
  export type RaceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Races to delete
     */
    where?: RaceWhereInput
    /**
     * Limit how many Races to delete.
     */
    limit?: number
  }

  /**
   * Race.bets
   */
  export type Race$betsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bet
     */
    omit?: BetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetInclude<ExtArgs> | null
    where?: BetWhereInput
    orderBy?: BetOrderByWithRelationInput | BetOrderByWithRelationInput[]
    cursor?: BetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BetScalarFieldEnum | BetScalarFieldEnum[]
  }

  /**
   * Race without action
   */
  export type RaceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
  }


  /**
   * Model Duck
   */

  export type AggregateDuck = {
    _count: DuckCountAggregateOutputType | null
    _min: DuckMinAggregateOutputType | null
    _max: DuckMaxAggregateOutputType | null
  }

  export type DuckMinAggregateOutputType = {
    id: string | null
    name: string | null
    color: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type DuckMaxAggregateOutputType = {
    id: string | null
    name: string | null
    color: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type DuckCountAggregateOutputType = {
    id: number
    name: number
    color: number
    userId: number
    createdAt: number
    _all: number
  }


  export type DuckMinAggregateInputType = {
    id?: true
    name?: true
    color?: true
    userId?: true
    createdAt?: true
  }

  export type DuckMaxAggregateInputType = {
    id?: true
    name?: true
    color?: true
    userId?: true
    createdAt?: true
  }

  export type DuckCountAggregateInputType = {
    id?: true
    name?: true
    color?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type DuckAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Duck to aggregate.
     */
    where?: DuckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ducks to fetch.
     */
    orderBy?: DuckOrderByWithRelationInput | DuckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DuckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ducks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ducks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ducks
    **/
    _count?: true | DuckCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DuckMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DuckMaxAggregateInputType
  }

  export type GetDuckAggregateType<T extends DuckAggregateArgs> = {
        [P in keyof T & keyof AggregateDuck]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDuck[P]>
      : GetScalarType<T[P], AggregateDuck[P]>
  }




  export type DuckGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DuckWhereInput
    orderBy?: DuckOrderByWithAggregationInput | DuckOrderByWithAggregationInput[]
    by: DuckScalarFieldEnum[] | DuckScalarFieldEnum
    having?: DuckScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DuckCountAggregateInputType | true
    _min?: DuckMinAggregateInputType
    _max?: DuckMaxAggregateInputType
  }

  export type DuckGroupByOutputType = {
    id: string
    name: string
    color: string
    userId: string | null
    createdAt: Date
    _count: DuckCountAggregateOutputType | null
    _min: DuckMinAggregateOutputType | null
    _max: DuckMaxAggregateOutputType | null
  }

  type GetDuckGroupByPayload<T extends DuckGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DuckGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DuckGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DuckGroupByOutputType[P]>
            : GetScalarType<T[P], DuckGroupByOutputType[P]>
        }
      >
    >


  export type DuckSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    color?: boolean
    userId?: boolean
    createdAt?: boolean
    sponsoredBy?: boolean | Duck$sponsoredByArgs<ExtArgs>
    Bet?: boolean | Duck$BetArgs<ExtArgs>
    Auction?: boolean | Duck$AuctionArgs<ExtArgs>
    _count?: boolean | DuckCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["duck"]>

  export type DuckSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    color?: boolean
    userId?: boolean
    createdAt?: boolean
    sponsoredBy?: boolean | Duck$sponsoredByArgs<ExtArgs>
  }, ExtArgs["result"]["duck"]>

  export type DuckSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    color?: boolean
    userId?: boolean
    createdAt?: boolean
    sponsoredBy?: boolean | Duck$sponsoredByArgs<ExtArgs>
  }, ExtArgs["result"]["duck"]>

  export type DuckSelectScalar = {
    id?: boolean
    name?: boolean
    color?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type DuckOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "color" | "userId" | "createdAt", ExtArgs["result"]["duck"]>
  export type DuckInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sponsoredBy?: boolean | Duck$sponsoredByArgs<ExtArgs>
    Bet?: boolean | Duck$BetArgs<ExtArgs>
    Auction?: boolean | Duck$AuctionArgs<ExtArgs>
    _count?: boolean | DuckCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DuckIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sponsoredBy?: boolean | Duck$sponsoredByArgs<ExtArgs>
  }
  export type DuckIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sponsoredBy?: boolean | Duck$sponsoredByArgs<ExtArgs>
  }

  export type $DuckPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Duck"
    objects: {
      sponsoredBy: Prisma.$UserPayload<ExtArgs> | null
      Bet: Prisma.$BetPayload<ExtArgs>[]
      Auction: Prisma.$AuctionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      color: string
      userId: string | null
      createdAt: Date
    }, ExtArgs["result"]["duck"]>
    composites: {}
  }

  type DuckGetPayload<S extends boolean | null | undefined | DuckDefaultArgs> = $Result.GetResult<Prisma.$DuckPayload, S>

  type DuckCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DuckFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DuckCountAggregateInputType | true
    }

  export interface DuckDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Duck'], meta: { name: 'Duck' } }
    /**
     * Find zero or one Duck that matches the filter.
     * @param {DuckFindUniqueArgs} args - Arguments to find a Duck
     * @example
     * // Get one Duck
     * const duck = await prisma.duck.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DuckFindUniqueArgs>(args: SelectSubset<T, DuckFindUniqueArgs<ExtArgs>>): Prisma__DuckClient<$Result.GetResult<Prisma.$DuckPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Duck that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DuckFindUniqueOrThrowArgs} args - Arguments to find a Duck
     * @example
     * // Get one Duck
     * const duck = await prisma.duck.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DuckFindUniqueOrThrowArgs>(args: SelectSubset<T, DuckFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DuckClient<$Result.GetResult<Prisma.$DuckPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Duck that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DuckFindFirstArgs} args - Arguments to find a Duck
     * @example
     * // Get one Duck
     * const duck = await prisma.duck.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DuckFindFirstArgs>(args?: SelectSubset<T, DuckFindFirstArgs<ExtArgs>>): Prisma__DuckClient<$Result.GetResult<Prisma.$DuckPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Duck that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DuckFindFirstOrThrowArgs} args - Arguments to find a Duck
     * @example
     * // Get one Duck
     * const duck = await prisma.duck.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DuckFindFirstOrThrowArgs>(args?: SelectSubset<T, DuckFindFirstOrThrowArgs<ExtArgs>>): Prisma__DuckClient<$Result.GetResult<Prisma.$DuckPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ducks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DuckFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ducks
     * const ducks = await prisma.duck.findMany()
     * 
     * // Get first 10 Ducks
     * const ducks = await prisma.duck.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const duckWithIdOnly = await prisma.duck.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DuckFindManyArgs>(args?: SelectSubset<T, DuckFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DuckPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Duck.
     * @param {DuckCreateArgs} args - Arguments to create a Duck.
     * @example
     * // Create one Duck
     * const Duck = await prisma.duck.create({
     *   data: {
     *     // ... data to create a Duck
     *   }
     * })
     * 
     */
    create<T extends DuckCreateArgs>(args: SelectSubset<T, DuckCreateArgs<ExtArgs>>): Prisma__DuckClient<$Result.GetResult<Prisma.$DuckPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ducks.
     * @param {DuckCreateManyArgs} args - Arguments to create many Ducks.
     * @example
     * // Create many Ducks
     * const duck = await prisma.duck.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DuckCreateManyArgs>(args?: SelectSubset<T, DuckCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ducks and returns the data saved in the database.
     * @param {DuckCreateManyAndReturnArgs} args - Arguments to create many Ducks.
     * @example
     * // Create many Ducks
     * const duck = await prisma.duck.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ducks and only return the `id`
     * const duckWithIdOnly = await prisma.duck.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DuckCreateManyAndReturnArgs>(args?: SelectSubset<T, DuckCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DuckPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Duck.
     * @param {DuckDeleteArgs} args - Arguments to delete one Duck.
     * @example
     * // Delete one Duck
     * const Duck = await prisma.duck.delete({
     *   where: {
     *     // ... filter to delete one Duck
     *   }
     * })
     * 
     */
    delete<T extends DuckDeleteArgs>(args: SelectSubset<T, DuckDeleteArgs<ExtArgs>>): Prisma__DuckClient<$Result.GetResult<Prisma.$DuckPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Duck.
     * @param {DuckUpdateArgs} args - Arguments to update one Duck.
     * @example
     * // Update one Duck
     * const duck = await prisma.duck.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DuckUpdateArgs>(args: SelectSubset<T, DuckUpdateArgs<ExtArgs>>): Prisma__DuckClient<$Result.GetResult<Prisma.$DuckPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ducks.
     * @param {DuckDeleteManyArgs} args - Arguments to filter Ducks to delete.
     * @example
     * // Delete a few Ducks
     * const { count } = await prisma.duck.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DuckDeleteManyArgs>(args?: SelectSubset<T, DuckDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ducks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DuckUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ducks
     * const duck = await prisma.duck.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DuckUpdateManyArgs>(args: SelectSubset<T, DuckUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ducks and returns the data updated in the database.
     * @param {DuckUpdateManyAndReturnArgs} args - Arguments to update many Ducks.
     * @example
     * // Update many Ducks
     * const duck = await prisma.duck.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ducks and only return the `id`
     * const duckWithIdOnly = await prisma.duck.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DuckUpdateManyAndReturnArgs>(args: SelectSubset<T, DuckUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DuckPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Duck.
     * @param {DuckUpsertArgs} args - Arguments to update or create a Duck.
     * @example
     * // Update or create a Duck
     * const duck = await prisma.duck.upsert({
     *   create: {
     *     // ... data to create a Duck
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Duck we want to update
     *   }
     * })
     */
    upsert<T extends DuckUpsertArgs>(args: SelectSubset<T, DuckUpsertArgs<ExtArgs>>): Prisma__DuckClient<$Result.GetResult<Prisma.$DuckPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ducks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DuckCountArgs} args - Arguments to filter Ducks to count.
     * @example
     * // Count the number of Ducks
     * const count = await prisma.duck.count({
     *   where: {
     *     // ... the filter for the Ducks we want to count
     *   }
     * })
    **/
    count<T extends DuckCountArgs>(
      args?: Subset<T, DuckCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DuckCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Duck.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DuckAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DuckAggregateArgs>(args: Subset<T, DuckAggregateArgs>): Prisma.PrismaPromise<GetDuckAggregateType<T>>

    /**
     * Group by Duck.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DuckGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DuckGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DuckGroupByArgs['orderBy'] }
        : { orderBy?: DuckGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DuckGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDuckGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Duck model
   */
  readonly fields: DuckFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Duck.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DuckClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sponsoredBy<T extends Duck$sponsoredByArgs<ExtArgs> = {}>(args?: Subset<T, Duck$sponsoredByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Bet<T extends Duck$BetArgs<ExtArgs> = {}>(args?: Subset<T, Duck$BetArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Auction<T extends Duck$AuctionArgs<ExtArgs> = {}>(args?: Subset<T, Duck$AuctionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuctionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Duck model
   */
  interface DuckFieldRefs {
    readonly id: FieldRef<"Duck", 'String'>
    readonly name: FieldRef<"Duck", 'String'>
    readonly color: FieldRef<"Duck", 'String'>
    readonly userId: FieldRef<"Duck", 'String'>
    readonly createdAt: FieldRef<"Duck", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Duck findUnique
   */
  export type DuckFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Duck
     */
    select?: DuckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Duck
     */
    omit?: DuckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DuckInclude<ExtArgs> | null
    /**
     * Filter, which Duck to fetch.
     */
    where: DuckWhereUniqueInput
  }

  /**
   * Duck findUniqueOrThrow
   */
  export type DuckFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Duck
     */
    select?: DuckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Duck
     */
    omit?: DuckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DuckInclude<ExtArgs> | null
    /**
     * Filter, which Duck to fetch.
     */
    where: DuckWhereUniqueInput
  }

  /**
   * Duck findFirst
   */
  export type DuckFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Duck
     */
    select?: DuckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Duck
     */
    omit?: DuckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DuckInclude<ExtArgs> | null
    /**
     * Filter, which Duck to fetch.
     */
    where?: DuckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ducks to fetch.
     */
    orderBy?: DuckOrderByWithRelationInput | DuckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ducks.
     */
    cursor?: DuckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ducks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ducks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ducks.
     */
    distinct?: DuckScalarFieldEnum | DuckScalarFieldEnum[]
  }

  /**
   * Duck findFirstOrThrow
   */
  export type DuckFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Duck
     */
    select?: DuckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Duck
     */
    omit?: DuckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DuckInclude<ExtArgs> | null
    /**
     * Filter, which Duck to fetch.
     */
    where?: DuckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ducks to fetch.
     */
    orderBy?: DuckOrderByWithRelationInput | DuckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ducks.
     */
    cursor?: DuckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ducks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ducks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ducks.
     */
    distinct?: DuckScalarFieldEnum | DuckScalarFieldEnum[]
  }

  /**
   * Duck findMany
   */
  export type DuckFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Duck
     */
    select?: DuckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Duck
     */
    omit?: DuckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DuckInclude<ExtArgs> | null
    /**
     * Filter, which Ducks to fetch.
     */
    where?: DuckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ducks to fetch.
     */
    orderBy?: DuckOrderByWithRelationInput | DuckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ducks.
     */
    cursor?: DuckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ducks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ducks.
     */
    skip?: number
    distinct?: DuckScalarFieldEnum | DuckScalarFieldEnum[]
  }

  /**
   * Duck create
   */
  export type DuckCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Duck
     */
    select?: DuckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Duck
     */
    omit?: DuckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DuckInclude<ExtArgs> | null
    /**
     * The data needed to create a Duck.
     */
    data: XOR<DuckCreateInput, DuckUncheckedCreateInput>
  }

  /**
   * Duck createMany
   */
  export type DuckCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ducks.
     */
    data: DuckCreateManyInput | DuckCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Duck createManyAndReturn
   */
  export type DuckCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Duck
     */
    select?: DuckSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Duck
     */
    omit?: DuckOmit<ExtArgs> | null
    /**
     * The data used to create many Ducks.
     */
    data: DuckCreateManyInput | DuckCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DuckIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Duck update
   */
  export type DuckUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Duck
     */
    select?: DuckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Duck
     */
    omit?: DuckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DuckInclude<ExtArgs> | null
    /**
     * The data needed to update a Duck.
     */
    data: XOR<DuckUpdateInput, DuckUncheckedUpdateInput>
    /**
     * Choose, which Duck to update.
     */
    where: DuckWhereUniqueInput
  }

  /**
   * Duck updateMany
   */
  export type DuckUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ducks.
     */
    data: XOR<DuckUpdateManyMutationInput, DuckUncheckedUpdateManyInput>
    /**
     * Filter which Ducks to update
     */
    where?: DuckWhereInput
    /**
     * Limit how many Ducks to update.
     */
    limit?: number
  }

  /**
   * Duck updateManyAndReturn
   */
  export type DuckUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Duck
     */
    select?: DuckSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Duck
     */
    omit?: DuckOmit<ExtArgs> | null
    /**
     * The data used to update Ducks.
     */
    data: XOR<DuckUpdateManyMutationInput, DuckUncheckedUpdateManyInput>
    /**
     * Filter which Ducks to update
     */
    where?: DuckWhereInput
    /**
     * Limit how many Ducks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DuckIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Duck upsert
   */
  export type DuckUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Duck
     */
    select?: DuckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Duck
     */
    omit?: DuckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DuckInclude<ExtArgs> | null
    /**
     * The filter to search for the Duck to update in case it exists.
     */
    where: DuckWhereUniqueInput
    /**
     * In case the Duck found by the `where` argument doesn't exist, create a new Duck with this data.
     */
    create: XOR<DuckCreateInput, DuckUncheckedCreateInput>
    /**
     * In case the Duck was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DuckUpdateInput, DuckUncheckedUpdateInput>
  }

  /**
   * Duck delete
   */
  export type DuckDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Duck
     */
    select?: DuckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Duck
     */
    omit?: DuckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DuckInclude<ExtArgs> | null
    /**
     * Filter which Duck to delete.
     */
    where: DuckWhereUniqueInput
  }

  /**
   * Duck deleteMany
   */
  export type DuckDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ducks to delete
     */
    where?: DuckWhereInput
    /**
     * Limit how many Ducks to delete.
     */
    limit?: number
  }

  /**
   * Duck.sponsoredBy
   */
  export type Duck$sponsoredByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Duck.Bet
   */
  export type Duck$BetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bet
     */
    omit?: BetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetInclude<ExtArgs> | null
    where?: BetWhereInput
    orderBy?: BetOrderByWithRelationInput | BetOrderByWithRelationInput[]
    cursor?: BetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BetScalarFieldEnum | BetScalarFieldEnum[]
  }

  /**
   * Duck.Auction
   */
  export type Duck$AuctionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auction
     */
    select?: AuctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auction
     */
    omit?: AuctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionInclude<ExtArgs> | null
    where?: AuctionWhereInput
    orderBy?: AuctionOrderByWithRelationInput | AuctionOrderByWithRelationInput[]
    cursor?: AuctionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuctionScalarFieldEnum | AuctionScalarFieldEnum[]
  }

  /**
   * Duck without action
   */
  export type DuckDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Duck
     */
    select?: DuckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Duck
     */
    omit?: DuckOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DuckInclude<ExtArgs> | null
  }


  /**
   * Model Auction
   */

  export type AggregateAuction = {
    _count: AuctionCountAggregateOutputType | null
    _avg: AuctionAvgAggregateOutputType | null
    _sum: AuctionSumAggregateOutputType | null
    _min: AuctionMinAggregateOutputType | null
    _max: AuctionMaxAggregateOutputType | null
  }

  export type AuctionAvgAggregateOutputType = {
    amount: number | null
  }

  export type AuctionSumAggregateOutputType = {
    amount: number | null
  }

  export type AuctionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    duckId: string | null
    amount: number | null
    newName: string | null
    expiredAt: Date | null
    createdAt: Date | null
  }

  export type AuctionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    duckId: string | null
    amount: number | null
    newName: string | null
    expiredAt: Date | null
    createdAt: Date | null
  }

  export type AuctionCountAggregateOutputType = {
    id: number
    userId: number
    duckId: number
    amount: number
    newName: number
    expiredAt: number
    createdAt: number
    _all: number
  }


  export type AuctionAvgAggregateInputType = {
    amount?: true
  }

  export type AuctionSumAggregateInputType = {
    amount?: true
  }

  export type AuctionMinAggregateInputType = {
    id?: true
    userId?: true
    duckId?: true
    amount?: true
    newName?: true
    expiredAt?: true
    createdAt?: true
  }

  export type AuctionMaxAggregateInputType = {
    id?: true
    userId?: true
    duckId?: true
    amount?: true
    newName?: true
    expiredAt?: true
    createdAt?: true
  }

  export type AuctionCountAggregateInputType = {
    id?: true
    userId?: true
    duckId?: true
    amount?: true
    newName?: true
    expiredAt?: true
    createdAt?: true
    _all?: true
  }

  export type AuctionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Auction to aggregate.
     */
    where?: AuctionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Auctions to fetch.
     */
    orderBy?: AuctionOrderByWithRelationInput | AuctionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuctionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Auctions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Auctions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Auctions
    **/
    _count?: true | AuctionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuctionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuctionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuctionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuctionMaxAggregateInputType
  }

  export type GetAuctionAggregateType<T extends AuctionAggregateArgs> = {
        [P in keyof T & keyof AggregateAuction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuction[P]>
      : GetScalarType<T[P], AggregateAuction[P]>
  }




  export type AuctionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuctionWhereInput
    orderBy?: AuctionOrderByWithAggregationInput | AuctionOrderByWithAggregationInput[]
    by: AuctionScalarFieldEnum[] | AuctionScalarFieldEnum
    having?: AuctionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuctionCountAggregateInputType | true
    _avg?: AuctionAvgAggregateInputType
    _sum?: AuctionSumAggregateInputType
    _min?: AuctionMinAggregateInputType
    _max?: AuctionMaxAggregateInputType
  }

  export type AuctionGroupByOutputType = {
    id: string
    userId: string | null
    duckId: string
    amount: number
    newName: string
    expiredAt: Date
    createdAt: Date
    _count: AuctionCountAggregateOutputType | null
    _avg: AuctionAvgAggregateOutputType | null
    _sum: AuctionSumAggregateOutputType | null
    _min: AuctionMinAggregateOutputType | null
    _max: AuctionMaxAggregateOutputType | null
  }

  type GetAuctionGroupByPayload<T extends AuctionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuctionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuctionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuctionGroupByOutputType[P]>
            : GetScalarType<T[P], AuctionGroupByOutputType[P]>
        }
      >
    >


  export type AuctionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    duckId?: boolean
    amount?: boolean
    newName?: boolean
    expiredAt?: boolean
    createdAt?: boolean
    duck?: boolean | DuckDefaultArgs<ExtArgs>
    user?: boolean | Auction$userArgs<ExtArgs>
  }, ExtArgs["result"]["auction"]>

  export type AuctionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    duckId?: boolean
    amount?: boolean
    newName?: boolean
    expiredAt?: boolean
    createdAt?: boolean
    duck?: boolean | DuckDefaultArgs<ExtArgs>
    user?: boolean | Auction$userArgs<ExtArgs>
  }, ExtArgs["result"]["auction"]>

  export type AuctionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    duckId?: boolean
    amount?: boolean
    newName?: boolean
    expiredAt?: boolean
    createdAt?: boolean
    duck?: boolean | DuckDefaultArgs<ExtArgs>
    user?: boolean | Auction$userArgs<ExtArgs>
  }, ExtArgs["result"]["auction"]>

  export type AuctionSelectScalar = {
    id?: boolean
    userId?: boolean
    duckId?: boolean
    amount?: boolean
    newName?: boolean
    expiredAt?: boolean
    createdAt?: boolean
  }

  export type AuctionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "duckId" | "amount" | "newName" | "expiredAt" | "createdAt", ExtArgs["result"]["auction"]>
  export type AuctionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    duck?: boolean | DuckDefaultArgs<ExtArgs>
    user?: boolean | Auction$userArgs<ExtArgs>
  }
  export type AuctionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    duck?: boolean | DuckDefaultArgs<ExtArgs>
    user?: boolean | Auction$userArgs<ExtArgs>
  }
  export type AuctionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    duck?: boolean | DuckDefaultArgs<ExtArgs>
    user?: boolean | Auction$userArgs<ExtArgs>
  }

  export type $AuctionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Auction"
    objects: {
      duck: Prisma.$DuckPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      duckId: string
      amount: number
      newName: string
      expiredAt: Date
      createdAt: Date
    }, ExtArgs["result"]["auction"]>
    composites: {}
  }

  type AuctionGetPayload<S extends boolean | null | undefined | AuctionDefaultArgs> = $Result.GetResult<Prisma.$AuctionPayload, S>

  type AuctionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuctionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuctionCountAggregateInputType | true
    }

  export interface AuctionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Auction'], meta: { name: 'Auction' } }
    /**
     * Find zero or one Auction that matches the filter.
     * @param {AuctionFindUniqueArgs} args - Arguments to find a Auction
     * @example
     * // Get one Auction
     * const auction = await prisma.auction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuctionFindUniqueArgs>(args: SelectSubset<T, AuctionFindUniqueArgs<ExtArgs>>): Prisma__AuctionClient<$Result.GetResult<Prisma.$AuctionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Auction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuctionFindUniqueOrThrowArgs} args - Arguments to find a Auction
     * @example
     * // Get one Auction
     * const auction = await prisma.auction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuctionFindUniqueOrThrowArgs>(args: SelectSubset<T, AuctionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuctionClient<$Result.GetResult<Prisma.$AuctionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Auction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuctionFindFirstArgs} args - Arguments to find a Auction
     * @example
     * // Get one Auction
     * const auction = await prisma.auction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuctionFindFirstArgs>(args?: SelectSubset<T, AuctionFindFirstArgs<ExtArgs>>): Prisma__AuctionClient<$Result.GetResult<Prisma.$AuctionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Auction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuctionFindFirstOrThrowArgs} args - Arguments to find a Auction
     * @example
     * // Get one Auction
     * const auction = await prisma.auction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuctionFindFirstOrThrowArgs>(args?: SelectSubset<T, AuctionFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuctionClient<$Result.GetResult<Prisma.$AuctionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Auctions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuctionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Auctions
     * const auctions = await prisma.auction.findMany()
     * 
     * // Get first 10 Auctions
     * const auctions = await prisma.auction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auctionWithIdOnly = await prisma.auction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuctionFindManyArgs>(args?: SelectSubset<T, AuctionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuctionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Auction.
     * @param {AuctionCreateArgs} args - Arguments to create a Auction.
     * @example
     * // Create one Auction
     * const Auction = await prisma.auction.create({
     *   data: {
     *     // ... data to create a Auction
     *   }
     * })
     * 
     */
    create<T extends AuctionCreateArgs>(args: SelectSubset<T, AuctionCreateArgs<ExtArgs>>): Prisma__AuctionClient<$Result.GetResult<Prisma.$AuctionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Auctions.
     * @param {AuctionCreateManyArgs} args - Arguments to create many Auctions.
     * @example
     * // Create many Auctions
     * const auction = await prisma.auction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuctionCreateManyArgs>(args?: SelectSubset<T, AuctionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Auctions and returns the data saved in the database.
     * @param {AuctionCreateManyAndReturnArgs} args - Arguments to create many Auctions.
     * @example
     * // Create many Auctions
     * const auction = await prisma.auction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Auctions and only return the `id`
     * const auctionWithIdOnly = await prisma.auction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuctionCreateManyAndReturnArgs>(args?: SelectSubset<T, AuctionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuctionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Auction.
     * @param {AuctionDeleteArgs} args - Arguments to delete one Auction.
     * @example
     * // Delete one Auction
     * const Auction = await prisma.auction.delete({
     *   where: {
     *     // ... filter to delete one Auction
     *   }
     * })
     * 
     */
    delete<T extends AuctionDeleteArgs>(args: SelectSubset<T, AuctionDeleteArgs<ExtArgs>>): Prisma__AuctionClient<$Result.GetResult<Prisma.$AuctionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Auction.
     * @param {AuctionUpdateArgs} args - Arguments to update one Auction.
     * @example
     * // Update one Auction
     * const auction = await prisma.auction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuctionUpdateArgs>(args: SelectSubset<T, AuctionUpdateArgs<ExtArgs>>): Prisma__AuctionClient<$Result.GetResult<Prisma.$AuctionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Auctions.
     * @param {AuctionDeleteManyArgs} args - Arguments to filter Auctions to delete.
     * @example
     * // Delete a few Auctions
     * const { count } = await prisma.auction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuctionDeleteManyArgs>(args?: SelectSubset<T, AuctionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Auctions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuctionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Auctions
     * const auction = await prisma.auction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuctionUpdateManyArgs>(args: SelectSubset<T, AuctionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Auctions and returns the data updated in the database.
     * @param {AuctionUpdateManyAndReturnArgs} args - Arguments to update many Auctions.
     * @example
     * // Update many Auctions
     * const auction = await prisma.auction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Auctions and only return the `id`
     * const auctionWithIdOnly = await prisma.auction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuctionUpdateManyAndReturnArgs>(args: SelectSubset<T, AuctionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuctionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Auction.
     * @param {AuctionUpsertArgs} args - Arguments to update or create a Auction.
     * @example
     * // Update or create a Auction
     * const auction = await prisma.auction.upsert({
     *   create: {
     *     // ... data to create a Auction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Auction we want to update
     *   }
     * })
     */
    upsert<T extends AuctionUpsertArgs>(args: SelectSubset<T, AuctionUpsertArgs<ExtArgs>>): Prisma__AuctionClient<$Result.GetResult<Prisma.$AuctionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Auctions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuctionCountArgs} args - Arguments to filter Auctions to count.
     * @example
     * // Count the number of Auctions
     * const count = await prisma.auction.count({
     *   where: {
     *     // ... the filter for the Auctions we want to count
     *   }
     * })
    **/
    count<T extends AuctionCountArgs>(
      args?: Subset<T, AuctionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuctionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Auction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuctionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuctionAggregateArgs>(args: Subset<T, AuctionAggregateArgs>): Prisma.PrismaPromise<GetAuctionAggregateType<T>>

    /**
     * Group by Auction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuctionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuctionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuctionGroupByArgs['orderBy'] }
        : { orderBy?: AuctionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuctionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuctionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Auction model
   */
  readonly fields: AuctionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Auction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuctionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    duck<T extends DuckDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DuckDefaultArgs<ExtArgs>>): Prisma__DuckClient<$Result.GetResult<Prisma.$DuckPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends Auction$userArgs<ExtArgs> = {}>(args?: Subset<T, Auction$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Auction model
   */
  interface AuctionFieldRefs {
    readonly id: FieldRef<"Auction", 'String'>
    readonly userId: FieldRef<"Auction", 'String'>
    readonly duckId: FieldRef<"Auction", 'String'>
    readonly amount: FieldRef<"Auction", 'Float'>
    readonly newName: FieldRef<"Auction", 'String'>
    readonly expiredAt: FieldRef<"Auction", 'DateTime'>
    readonly createdAt: FieldRef<"Auction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Auction findUnique
   */
  export type AuctionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auction
     */
    select?: AuctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auction
     */
    omit?: AuctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionInclude<ExtArgs> | null
    /**
     * Filter, which Auction to fetch.
     */
    where: AuctionWhereUniqueInput
  }

  /**
   * Auction findUniqueOrThrow
   */
  export type AuctionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auction
     */
    select?: AuctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auction
     */
    omit?: AuctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionInclude<ExtArgs> | null
    /**
     * Filter, which Auction to fetch.
     */
    where: AuctionWhereUniqueInput
  }

  /**
   * Auction findFirst
   */
  export type AuctionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auction
     */
    select?: AuctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auction
     */
    omit?: AuctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionInclude<ExtArgs> | null
    /**
     * Filter, which Auction to fetch.
     */
    where?: AuctionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Auctions to fetch.
     */
    orderBy?: AuctionOrderByWithRelationInput | AuctionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Auctions.
     */
    cursor?: AuctionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Auctions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Auctions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Auctions.
     */
    distinct?: AuctionScalarFieldEnum | AuctionScalarFieldEnum[]
  }

  /**
   * Auction findFirstOrThrow
   */
  export type AuctionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auction
     */
    select?: AuctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auction
     */
    omit?: AuctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionInclude<ExtArgs> | null
    /**
     * Filter, which Auction to fetch.
     */
    where?: AuctionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Auctions to fetch.
     */
    orderBy?: AuctionOrderByWithRelationInput | AuctionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Auctions.
     */
    cursor?: AuctionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Auctions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Auctions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Auctions.
     */
    distinct?: AuctionScalarFieldEnum | AuctionScalarFieldEnum[]
  }

  /**
   * Auction findMany
   */
  export type AuctionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auction
     */
    select?: AuctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auction
     */
    omit?: AuctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionInclude<ExtArgs> | null
    /**
     * Filter, which Auctions to fetch.
     */
    where?: AuctionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Auctions to fetch.
     */
    orderBy?: AuctionOrderByWithRelationInput | AuctionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Auctions.
     */
    cursor?: AuctionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Auctions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Auctions.
     */
    skip?: number
    distinct?: AuctionScalarFieldEnum | AuctionScalarFieldEnum[]
  }

  /**
   * Auction create
   */
  export type AuctionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auction
     */
    select?: AuctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auction
     */
    omit?: AuctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionInclude<ExtArgs> | null
    /**
     * The data needed to create a Auction.
     */
    data: XOR<AuctionCreateInput, AuctionUncheckedCreateInput>
  }

  /**
   * Auction createMany
   */
  export type AuctionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Auctions.
     */
    data: AuctionCreateManyInput | AuctionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Auction createManyAndReturn
   */
  export type AuctionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auction
     */
    select?: AuctionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Auction
     */
    omit?: AuctionOmit<ExtArgs> | null
    /**
     * The data used to create many Auctions.
     */
    data: AuctionCreateManyInput | AuctionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Auction update
   */
  export type AuctionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auction
     */
    select?: AuctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auction
     */
    omit?: AuctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionInclude<ExtArgs> | null
    /**
     * The data needed to update a Auction.
     */
    data: XOR<AuctionUpdateInput, AuctionUncheckedUpdateInput>
    /**
     * Choose, which Auction to update.
     */
    where: AuctionWhereUniqueInput
  }

  /**
   * Auction updateMany
   */
  export type AuctionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Auctions.
     */
    data: XOR<AuctionUpdateManyMutationInput, AuctionUncheckedUpdateManyInput>
    /**
     * Filter which Auctions to update
     */
    where?: AuctionWhereInput
    /**
     * Limit how many Auctions to update.
     */
    limit?: number
  }

  /**
   * Auction updateManyAndReturn
   */
  export type AuctionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auction
     */
    select?: AuctionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Auction
     */
    omit?: AuctionOmit<ExtArgs> | null
    /**
     * The data used to update Auctions.
     */
    data: XOR<AuctionUpdateManyMutationInput, AuctionUncheckedUpdateManyInput>
    /**
     * Filter which Auctions to update
     */
    where?: AuctionWhereInput
    /**
     * Limit how many Auctions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Auction upsert
   */
  export type AuctionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auction
     */
    select?: AuctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auction
     */
    omit?: AuctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionInclude<ExtArgs> | null
    /**
     * The filter to search for the Auction to update in case it exists.
     */
    where: AuctionWhereUniqueInput
    /**
     * In case the Auction found by the `where` argument doesn't exist, create a new Auction with this data.
     */
    create: XOR<AuctionCreateInput, AuctionUncheckedCreateInput>
    /**
     * In case the Auction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuctionUpdateInput, AuctionUncheckedUpdateInput>
  }

  /**
   * Auction delete
   */
  export type AuctionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auction
     */
    select?: AuctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auction
     */
    omit?: AuctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionInclude<ExtArgs> | null
    /**
     * Filter which Auction to delete.
     */
    where: AuctionWhereUniqueInput
  }

  /**
   * Auction deleteMany
   */
  export type AuctionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Auctions to delete
     */
    where?: AuctionWhereInput
    /**
     * Limit how many Auctions to delete.
     */
    limit?: number
  }

  /**
   * Auction.user
   */
  export type Auction$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Auction without action
   */
  export type AuctionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auction
     */
    select?: AuctionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Auction
     */
    omit?: AuctionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuctionInclude<ExtArgs> | null
  }


  /**
   * Model Deposit
   */

  export type AggregateDeposit = {
    _count: DepositCountAggregateOutputType | null
    _avg: DepositAvgAggregateOutputType | null
    _sum: DepositSumAggregateOutputType | null
    _min: DepositMinAggregateOutputType | null
    _max: DepositMaxAggregateOutputType | null
  }

  export type DepositAvgAggregateOutputType = {
    amount: number | null
  }

  export type DepositSumAggregateOutputType = {
    amount: number | null
  }

  export type DepositMinAggregateOutputType = {
    id: string | null
    userId: string | null
    amount: number | null
    createdAt: Date | null
  }

  export type DepositMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    amount: number | null
    createdAt: Date | null
  }

  export type DepositCountAggregateOutputType = {
    id: number
    userId: number
    amount: number
    createdAt: number
    _all: number
  }


  export type DepositAvgAggregateInputType = {
    amount?: true
  }

  export type DepositSumAggregateInputType = {
    amount?: true
  }

  export type DepositMinAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    createdAt?: true
  }

  export type DepositMaxAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    createdAt?: true
  }

  export type DepositCountAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    createdAt?: true
    _all?: true
  }

  export type DepositAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Deposit to aggregate.
     */
    where?: DepositWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deposits to fetch.
     */
    orderBy?: DepositOrderByWithRelationInput | DepositOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DepositWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deposits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deposits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Deposits
    **/
    _count?: true | DepositCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DepositAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DepositSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepositMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepositMaxAggregateInputType
  }

  export type GetDepositAggregateType<T extends DepositAggregateArgs> = {
        [P in keyof T & keyof AggregateDeposit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeposit[P]>
      : GetScalarType<T[P], AggregateDeposit[P]>
  }




  export type DepositGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepositWhereInput
    orderBy?: DepositOrderByWithAggregationInput | DepositOrderByWithAggregationInput[]
    by: DepositScalarFieldEnum[] | DepositScalarFieldEnum
    having?: DepositScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepositCountAggregateInputType | true
    _avg?: DepositAvgAggregateInputType
    _sum?: DepositSumAggregateInputType
    _min?: DepositMinAggregateInputType
    _max?: DepositMaxAggregateInputType
  }

  export type DepositGroupByOutputType = {
    id: string
    userId: string
    amount: number
    createdAt: Date
    _count: DepositCountAggregateOutputType | null
    _avg: DepositAvgAggregateOutputType | null
    _sum: DepositSumAggregateOutputType | null
    _min: DepositMinAggregateOutputType | null
    _max: DepositMaxAggregateOutputType | null
  }

  type GetDepositGroupByPayload<T extends DepositGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepositGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepositGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepositGroupByOutputType[P]>
            : GetScalarType<T[P], DepositGroupByOutputType[P]>
        }
      >
    >


  export type DepositSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deposit"]>

  export type DepositSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deposit"]>

  export type DepositSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deposit"]>

  export type DepositSelectScalar = {
    id?: boolean
    userId?: boolean
    amount?: boolean
    createdAt?: boolean
  }

  export type DepositOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "amount" | "createdAt", ExtArgs["result"]["deposit"]>
  export type DepositInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DepositIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DepositIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DepositPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Deposit"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      amount: number
      createdAt: Date
    }, ExtArgs["result"]["deposit"]>
    composites: {}
  }

  type DepositGetPayload<S extends boolean | null | undefined | DepositDefaultArgs> = $Result.GetResult<Prisma.$DepositPayload, S>

  type DepositCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DepositFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DepositCountAggregateInputType | true
    }

  export interface DepositDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Deposit'], meta: { name: 'Deposit' } }
    /**
     * Find zero or one Deposit that matches the filter.
     * @param {DepositFindUniqueArgs} args - Arguments to find a Deposit
     * @example
     * // Get one Deposit
     * const deposit = await prisma.deposit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DepositFindUniqueArgs>(args: SelectSubset<T, DepositFindUniqueArgs<ExtArgs>>): Prisma__DepositClient<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Deposit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DepositFindUniqueOrThrowArgs} args - Arguments to find a Deposit
     * @example
     * // Get one Deposit
     * const deposit = await prisma.deposit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DepositFindUniqueOrThrowArgs>(args: SelectSubset<T, DepositFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DepositClient<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Deposit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositFindFirstArgs} args - Arguments to find a Deposit
     * @example
     * // Get one Deposit
     * const deposit = await prisma.deposit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DepositFindFirstArgs>(args?: SelectSubset<T, DepositFindFirstArgs<ExtArgs>>): Prisma__DepositClient<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Deposit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositFindFirstOrThrowArgs} args - Arguments to find a Deposit
     * @example
     * // Get one Deposit
     * const deposit = await prisma.deposit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DepositFindFirstOrThrowArgs>(args?: SelectSubset<T, DepositFindFirstOrThrowArgs<ExtArgs>>): Prisma__DepositClient<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Deposits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Deposits
     * const deposits = await prisma.deposit.findMany()
     * 
     * // Get first 10 Deposits
     * const deposits = await prisma.deposit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const depositWithIdOnly = await prisma.deposit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DepositFindManyArgs>(args?: SelectSubset<T, DepositFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Deposit.
     * @param {DepositCreateArgs} args - Arguments to create a Deposit.
     * @example
     * // Create one Deposit
     * const Deposit = await prisma.deposit.create({
     *   data: {
     *     // ... data to create a Deposit
     *   }
     * })
     * 
     */
    create<T extends DepositCreateArgs>(args: SelectSubset<T, DepositCreateArgs<ExtArgs>>): Prisma__DepositClient<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Deposits.
     * @param {DepositCreateManyArgs} args - Arguments to create many Deposits.
     * @example
     * // Create many Deposits
     * const deposit = await prisma.deposit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DepositCreateManyArgs>(args?: SelectSubset<T, DepositCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Deposits and returns the data saved in the database.
     * @param {DepositCreateManyAndReturnArgs} args - Arguments to create many Deposits.
     * @example
     * // Create many Deposits
     * const deposit = await prisma.deposit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Deposits and only return the `id`
     * const depositWithIdOnly = await prisma.deposit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DepositCreateManyAndReturnArgs>(args?: SelectSubset<T, DepositCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Deposit.
     * @param {DepositDeleteArgs} args - Arguments to delete one Deposit.
     * @example
     * // Delete one Deposit
     * const Deposit = await prisma.deposit.delete({
     *   where: {
     *     // ... filter to delete one Deposit
     *   }
     * })
     * 
     */
    delete<T extends DepositDeleteArgs>(args: SelectSubset<T, DepositDeleteArgs<ExtArgs>>): Prisma__DepositClient<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Deposit.
     * @param {DepositUpdateArgs} args - Arguments to update one Deposit.
     * @example
     * // Update one Deposit
     * const deposit = await prisma.deposit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DepositUpdateArgs>(args: SelectSubset<T, DepositUpdateArgs<ExtArgs>>): Prisma__DepositClient<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Deposits.
     * @param {DepositDeleteManyArgs} args - Arguments to filter Deposits to delete.
     * @example
     * // Delete a few Deposits
     * const { count } = await prisma.deposit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DepositDeleteManyArgs>(args?: SelectSubset<T, DepositDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Deposits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Deposits
     * const deposit = await prisma.deposit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DepositUpdateManyArgs>(args: SelectSubset<T, DepositUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Deposits and returns the data updated in the database.
     * @param {DepositUpdateManyAndReturnArgs} args - Arguments to update many Deposits.
     * @example
     * // Update many Deposits
     * const deposit = await prisma.deposit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Deposits and only return the `id`
     * const depositWithIdOnly = await prisma.deposit.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DepositUpdateManyAndReturnArgs>(args: SelectSubset<T, DepositUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Deposit.
     * @param {DepositUpsertArgs} args - Arguments to update or create a Deposit.
     * @example
     * // Update or create a Deposit
     * const deposit = await prisma.deposit.upsert({
     *   create: {
     *     // ... data to create a Deposit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Deposit we want to update
     *   }
     * })
     */
    upsert<T extends DepositUpsertArgs>(args: SelectSubset<T, DepositUpsertArgs<ExtArgs>>): Prisma__DepositClient<$Result.GetResult<Prisma.$DepositPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Deposits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositCountArgs} args - Arguments to filter Deposits to count.
     * @example
     * // Count the number of Deposits
     * const count = await prisma.deposit.count({
     *   where: {
     *     // ... the filter for the Deposits we want to count
     *   }
     * })
    **/
    count<T extends DepositCountArgs>(
      args?: Subset<T, DepositCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepositCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Deposit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DepositAggregateArgs>(args: Subset<T, DepositAggregateArgs>): Prisma.PrismaPromise<GetDepositAggregateType<T>>

    /**
     * Group by Deposit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepositGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DepositGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DepositGroupByArgs['orderBy'] }
        : { orderBy?: DepositGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DepositGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepositGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Deposit model
   */
  readonly fields: DepositFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Deposit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DepositClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Deposit model
   */
  interface DepositFieldRefs {
    readonly id: FieldRef<"Deposit", 'String'>
    readonly userId: FieldRef<"Deposit", 'String'>
    readonly amount: FieldRef<"Deposit", 'Float'>
    readonly createdAt: FieldRef<"Deposit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Deposit findUnique
   */
  export type DepositFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deposit
     */
    omit?: DepositOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    /**
     * Filter, which Deposit to fetch.
     */
    where: DepositWhereUniqueInput
  }

  /**
   * Deposit findUniqueOrThrow
   */
  export type DepositFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deposit
     */
    omit?: DepositOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    /**
     * Filter, which Deposit to fetch.
     */
    where: DepositWhereUniqueInput
  }

  /**
   * Deposit findFirst
   */
  export type DepositFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deposit
     */
    omit?: DepositOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    /**
     * Filter, which Deposit to fetch.
     */
    where?: DepositWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deposits to fetch.
     */
    orderBy?: DepositOrderByWithRelationInput | DepositOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Deposits.
     */
    cursor?: DepositWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deposits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deposits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Deposits.
     */
    distinct?: DepositScalarFieldEnum | DepositScalarFieldEnum[]
  }

  /**
   * Deposit findFirstOrThrow
   */
  export type DepositFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deposit
     */
    omit?: DepositOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    /**
     * Filter, which Deposit to fetch.
     */
    where?: DepositWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deposits to fetch.
     */
    orderBy?: DepositOrderByWithRelationInput | DepositOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Deposits.
     */
    cursor?: DepositWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deposits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deposits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Deposits.
     */
    distinct?: DepositScalarFieldEnum | DepositScalarFieldEnum[]
  }

  /**
   * Deposit findMany
   */
  export type DepositFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deposit
     */
    omit?: DepositOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    /**
     * Filter, which Deposits to fetch.
     */
    where?: DepositWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deposits to fetch.
     */
    orderBy?: DepositOrderByWithRelationInput | DepositOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Deposits.
     */
    cursor?: DepositWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deposits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deposits.
     */
    skip?: number
    distinct?: DepositScalarFieldEnum | DepositScalarFieldEnum[]
  }

  /**
   * Deposit create
   */
  export type DepositCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deposit
     */
    omit?: DepositOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    /**
     * The data needed to create a Deposit.
     */
    data: XOR<DepositCreateInput, DepositUncheckedCreateInput>
  }

  /**
   * Deposit createMany
   */
  export type DepositCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Deposits.
     */
    data: DepositCreateManyInput | DepositCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Deposit createManyAndReturn
   */
  export type DepositCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Deposit
     */
    omit?: DepositOmit<ExtArgs> | null
    /**
     * The data used to create many Deposits.
     */
    data: DepositCreateManyInput | DepositCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Deposit update
   */
  export type DepositUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deposit
     */
    omit?: DepositOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    /**
     * The data needed to update a Deposit.
     */
    data: XOR<DepositUpdateInput, DepositUncheckedUpdateInput>
    /**
     * Choose, which Deposit to update.
     */
    where: DepositWhereUniqueInput
  }

  /**
   * Deposit updateMany
   */
  export type DepositUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Deposits.
     */
    data: XOR<DepositUpdateManyMutationInput, DepositUncheckedUpdateManyInput>
    /**
     * Filter which Deposits to update
     */
    where?: DepositWhereInput
    /**
     * Limit how many Deposits to update.
     */
    limit?: number
  }

  /**
   * Deposit updateManyAndReturn
   */
  export type DepositUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Deposit
     */
    omit?: DepositOmit<ExtArgs> | null
    /**
     * The data used to update Deposits.
     */
    data: XOR<DepositUpdateManyMutationInput, DepositUncheckedUpdateManyInput>
    /**
     * Filter which Deposits to update
     */
    where?: DepositWhereInput
    /**
     * Limit how many Deposits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Deposit upsert
   */
  export type DepositUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deposit
     */
    omit?: DepositOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    /**
     * The filter to search for the Deposit to update in case it exists.
     */
    where: DepositWhereUniqueInput
    /**
     * In case the Deposit found by the `where` argument doesn't exist, create a new Deposit with this data.
     */
    create: XOR<DepositCreateInput, DepositUncheckedCreateInput>
    /**
     * In case the Deposit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DepositUpdateInput, DepositUncheckedUpdateInput>
  }

  /**
   * Deposit delete
   */
  export type DepositDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deposit
     */
    omit?: DepositOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
    /**
     * Filter which Deposit to delete.
     */
    where: DepositWhereUniqueInput
  }

  /**
   * Deposit deleteMany
   */
  export type DepositDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Deposits to delete
     */
    where?: DepositWhereInput
    /**
     * Limit how many Deposits to delete.
     */
    limit?: number
  }

  /**
   * Deposit without action
   */
  export type DepositDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deposit
     */
    select?: DepositSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deposit
     */
    omit?: DepositOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepositInclude<ExtArgs> | null
  }


  /**
   * Model Bonus
   */

  export type AggregateBonus = {
    _count: BonusCountAggregateOutputType | null
    _avg: BonusAvgAggregateOutputType | null
    _sum: BonusSumAggregateOutputType | null
    _min: BonusMinAggregateOutputType | null
    _max: BonusMaxAggregateOutputType | null
  }

  export type BonusAvgAggregateOutputType = {
    amount: number | null
  }

  export type BonusSumAggregateOutputType = {
    amount: number | null
  }

  export type BonusMinAggregateOutputType = {
    id: string | null
    userId: string | null
    amount: number | null
    createdAt: Date | null
  }

  export type BonusMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    amount: number | null
    createdAt: Date | null
  }

  export type BonusCountAggregateOutputType = {
    id: number
    userId: number
    amount: number
    createdAt: number
    _all: number
  }


  export type BonusAvgAggregateInputType = {
    amount?: true
  }

  export type BonusSumAggregateInputType = {
    amount?: true
  }

  export type BonusMinAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    createdAt?: true
  }

  export type BonusMaxAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    createdAt?: true
  }

  export type BonusCountAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    createdAt?: true
    _all?: true
  }

  export type BonusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bonus to aggregate.
     */
    where?: BonusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bonuses to fetch.
     */
    orderBy?: BonusOrderByWithRelationInput | BonusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BonusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bonuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bonuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bonuses
    **/
    _count?: true | BonusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BonusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BonusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BonusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BonusMaxAggregateInputType
  }

  export type GetBonusAggregateType<T extends BonusAggregateArgs> = {
        [P in keyof T & keyof AggregateBonus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBonus[P]>
      : GetScalarType<T[P], AggregateBonus[P]>
  }




  export type BonusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BonusWhereInput
    orderBy?: BonusOrderByWithAggregationInput | BonusOrderByWithAggregationInput[]
    by: BonusScalarFieldEnum[] | BonusScalarFieldEnum
    having?: BonusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BonusCountAggregateInputType | true
    _avg?: BonusAvgAggregateInputType
    _sum?: BonusSumAggregateInputType
    _min?: BonusMinAggregateInputType
    _max?: BonusMaxAggregateInputType
  }

  export type BonusGroupByOutputType = {
    id: string
    userId: string
    amount: number
    createdAt: Date
    _count: BonusCountAggregateOutputType | null
    _avg: BonusAvgAggregateOutputType | null
    _sum: BonusSumAggregateOutputType | null
    _min: BonusMinAggregateOutputType | null
    _max: BonusMaxAggregateOutputType | null
  }

  type GetBonusGroupByPayload<T extends BonusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BonusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BonusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BonusGroupByOutputType[P]>
            : GetScalarType<T[P], BonusGroupByOutputType[P]>
        }
      >
    >


  export type BonusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bonus"]>

  export type BonusSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bonus"]>

  export type BonusSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bonus"]>

  export type BonusSelectScalar = {
    id?: boolean
    userId?: boolean
    amount?: boolean
    createdAt?: boolean
  }

  export type BonusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "amount" | "createdAt", ExtArgs["result"]["bonus"]>
  export type BonusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BonusIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BonusIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BonusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bonus"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      amount: number
      createdAt: Date
    }, ExtArgs["result"]["bonus"]>
    composites: {}
  }

  type BonusGetPayload<S extends boolean | null | undefined | BonusDefaultArgs> = $Result.GetResult<Prisma.$BonusPayload, S>

  type BonusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BonusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BonusCountAggregateInputType | true
    }

  export interface BonusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bonus'], meta: { name: 'Bonus' } }
    /**
     * Find zero or one Bonus that matches the filter.
     * @param {BonusFindUniqueArgs} args - Arguments to find a Bonus
     * @example
     * // Get one Bonus
     * const bonus = await prisma.bonus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BonusFindUniqueArgs>(args: SelectSubset<T, BonusFindUniqueArgs<ExtArgs>>): Prisma__BonusClient<$Result.GetResult<Prisma.$BonusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bonus that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BonusFindUniqueOrThrowArgs} args - Arguments to find a Bonus
     * @example
     * // Get one Bonus
     * const bonus = await prisma.bonus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BonusFindUniqueOrThrowArgs>(args: SelectSubset<T, BonusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BonusClient<$Result.GetResult<Prisma.$BonusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bonus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BonusFindFirstArgs} args - Arguments to find a Bonus
     * @example
     * // Get one Bonus
     * const bonus = await prisma.bonus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BonusFindFirstArgs>(args?: SelectSubset<T, BonusFindFirstArgs<ExtArgs>>): Prisma__BonusClient<$Result.GetResult<Prisma.$BonusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bonus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BonusFindFirstOrThrowArgs} args - Arguments to find a Bonus
     * @example
     * // Get one Bonus
     * const bonus = await prisma.bonus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BonusFindFirstOrThrowArgs>(args?: SelectSubset<T, BonusFindFirstOrThrowArgs<ExtArgs>>): Prisma__BonusClient<$Result.GetResult<Prisma.$BonusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bonuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BonusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bonuses
     * const bonuses = await prisma.bonus.findMany()
     * 
     * // Get first 10 Bonuses
     * const bonuses = await prisma.bonus.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bonusWithIdOnly = await prisma.bonus.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BonusFindManyArgs>(args?: SelectSubset<T, BonusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BonusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bonus.
     * @param {BonusCreateArgs} args - Arguments to create a Bonus.
     * @example
     * // Create one Bonus
     * const Bonus = await prisma.bonus.create({
     *   data: {
     *     // ... data to create a Bonus
     *   }
     * })
     * 
     */
    create<T extends BonusCreateArgs>(args: SelectSubset<T, BonusCreateArgs<ExtArgs>>): Prisma__BonusClient<$Result.GetResult<Prisma.$BonusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bonuses.
     * @param {BonusCreateManyArgs} args - Arguments to create many Bonuses.
     * @example
     * // Create many Bonuses
     * const bonus = await prisma.bonus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BonusCreateManyArgs>(args?: SelectSubset<T, BonusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bonuses and returns the data saved in the database.
     * @param {BonusCreateManyAndReturnArgs} args - Arguments to create many Bonuses.
     * @example
     * // Create many Bonuses
     * const bonus = await prisma.bonus.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bonuses and only return the `id`
     * const bonusWithIdOnly = await prisma.bonus.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BonusCreateManyAndReturnArgs>(args?: SelectSubset<T, BonusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BonusPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bonus.
     * @param {BonusDeleteArgs} args - Arguments to delete one Bonus.
     * @example
     * // Delete one Bonus
     * const Bonus = await prisma.bonus.delete({
     *   where: {
     *     // ... filter to delete one Bonus
     *   }
     * })
     * 
     */
    delete<T extends BonusDeleteArgs>(args: SelectSubset<T, BonusDeleteArgs<ExtArgs>>): Prisma__BonusClient<$Result.GetResult<Prisma.$BonusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bonus.
     * @param {BonusUpdateArgs} args - Arguments to update one Bonus.
     * @example
     * // Update one Bonus
     * const bonus = await prisma.bonus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BonusUpdateArgs>(args: SelectSubset<T, BonusUpdateArgs<ExtArgs>>): Prisma__BonusClient<$Result.GetResult<Prisma.$BonusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bonuses.
     * @param {BonusDeleteManyArgs} args - Arguments to filter Bonuses to delete.
     * @example
     * // Delete a few Bonuses
     * const { count } = await prisma.bonus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BonusDeleteManyArgs>(args?: SelectSubset<T, BonusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bonuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BonusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bonuses
     * const bonus = await prisma.bonus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BonusUpdateManyArgs>(args: SelectSubset<T, BonusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bonuses and returns the data updated in the database.
     * @param {BonusUpdateManyAndReturnArgs} args - Arguments to update many Bonuses.
     * @example
     * // Update many Bonuses
     * const bonus = await prisma.bonus.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bonuses and only return the `id`
     * const bonusWithIdOnly = await prisma.bonus.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BonusUpdateManyAndReturnArgs>(args: SelectSubset<T, BonusUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BonusPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bonus.
     * @param {BonusUpsertArgs} args - Arguments to update or create a Bonus.
     * @example
     * // Update or create a Bonus
     * const bonus = await prisma.bonus.upsert({
     *   create: {
     *     // ... data to create a Bonus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bonus we want to update
     *   }
     * })
     */
    upsert<T extends BonusUpsertArgs>(args: SelectSubset<T, BonusUpsertArgs<ExtArgs>>): Prisma__BonusClient<$Result.GetResult<Prisma.$BonusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bonuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BonusCountArgs} args - Arguments to filter Bonuses to count.
     * @example
     * // Count the number of Bonuses
     * const count = await prisma.bonus.count({
     *   where: {
     *     // ... the filter for the Bonuses we want to count
     *   }
     * })
    **/
    count<T extends BonusCountArgs>(
      args?: Subset<T, BonusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BonusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bonus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BonusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BonusAggregateArgs>(args: Subset<T, BonusAggregateArgs>): Prisma.PrismaPromise<GetBonusAggregateType<T>>

    /**
     * Group by Bonus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BonusGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BonusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BonusGroupByArgs['orderBy'] }
        : { orderBy?: BonusGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BonusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBonusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bonus model
   */
  readonly fields: BonusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bonus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BonusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Bonus model
   */
  interface BonusFieldRefs {
    readonly id: FieldRef<"Bonus", 'String'>
    readonly userId: FieldRef<"Bonus", 'String'>
    readonly amount: FieldRef<"Bonus", 'Float'>
    readonly createdAt: FieldRef<"Bonus", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Bonus findUnique
   */
  export type BonusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bonus
     */
    select?: BonusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bonus
     */
    omit?: BonusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BonusInclude<ExtArgs> | null
    /**
     * Filter, which Bonus to fetch.
     */
    where: BonusWhereUniqueInput
  }

  /**
   * Bonus findUniqueOrThrow
   */
  export type BonusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bonus
     */
    select?: BonusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bonus
     */
    omit?: BonusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BonusInclude<ExtArgs> | null
    /**
     * Filter, which Bonus to fetch.
     */
    where: BonusWhereUniqueInput
  }

  /**
   * Bonus findFirst
   */
  export type BonusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bonus
     */
    select?: BonusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bonus
     */
    omit?: BonusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BonusInclude<ExtArgs> | null
    /**
     * Filter, which Bonus to fetch.
     */
    where?: BonusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bonuses to fetch.
     */
    orderBy?: BonusOrderByWithRelationInput | BonusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bonuses.
     */
    cursor?: BonusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bonuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bonuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bonuses.
     */
    distinct?: BonusScalarFieldEnum | BonusScalarFieldEnum[]
  }

  /**
   * Bonus findFirstOrThrow
   */
  export type BonusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bonus
     */
    select?: BonusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bonus
     */
    omit?: BonusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BonusInclude<ExtArgs> | null
    /**
     * Filter, which Bonus to fetch.
     */
    where?: BonusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bonuses to fetch.
     */
    orderBy?: BonusOrderByWithRelationInput | BonusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bonuses.
     */
    cursor?: BonusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bonuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bonuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bonuses.
     */
    distinct?: BonusScalarFieldEnum | BonusScalarFieldEnum[]
  }

  /**
   * Bonus findMany
   */
  export type BonusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bonus
     */
    select?: BonusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bonus
     */
    omit?: BonusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BonusInclude<ExtArgs> | null
    /**
     * Filter, which Bonuses to fetch.
     */
    where?: BonusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bonuses to fetch.
     */
    orderBy?: BonusOrderByWithRelationInput | BonusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bonuses.
     */
    cursor?: BonusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bonuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bonuses.
     */
    skip?: number
    distinct?: BonusScalarFieldEnum | BonusScalarFieldEnum[]
  }

  /**
   * Bonus create
   */
  export type BonusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bonus
     */
    select?: BonusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bonus
     */
    omit?: BonusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BonusInclude<ExtArgs> | null
    /**
     * The data needed to create a Bonus.
     */
    data: XOR<BonusCreateInput, BonusUncheckedCreateInput>
  }

  /**
   * Bonus createMany
   */
  export type BonusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bonuses.
     */
    data: BonusCreateManyInput | BonusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bonus createManyAndReturn
   */
  export type BonusCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bonus
     */
    select?: BonusSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bonus
     */
    omit?: BonusOmit<ExtArgs> | null
    /**
     * The data used to create many Bonuses.
     */
    data: BonusCreateManyInput | BonusCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BonusIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bonus update
   */
  export type BonusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bonus
     */
    select?: BonusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bonus
     */
    omit?: BonusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BonusInclude<ExtArgs> | null
    /**
     * The data needed to update a Bonus.
     */
    data: XOR<BonusUpdateInput, BonusUncheckedUpdateInput>
    /**
     * Choose, which Bonus to update.
     */
    where: BonusWhereUniqueInput
  }

  /**
   * Bonus updateMany
   */
  export type BonusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bonuses.
     */
    data: XOR<BonusUpdateManyMutationInput, BonusUncheckedUpdateManyInput>
    /**
     * Filter which Bonuses to update
     */
    where?: BonusWhereInput
    /**
     * Limit how many Bonuses to update.
     */
    limit?: number
  }

  /**
   * Bonus updateManyAndReturn
   */
  export type BonusUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bonus
     */
    select?: BonusSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bonus
     */
    omit?: BonusOmit<ExtArgs> | null
    /**
     * The data used to update Bonuses.
     */
    data: XOR<BonusUpdateManyMutationInput, BonusUncheckedUpdateManyInput>
    /**
     * Filter which Bonuses to update
     */
    where?: BonusWhereInput
    /**
     * Limit how many Bonuses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BonusIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bonus upsert
   */
  export type BonusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bonus
     */
    select?: BonusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bonus
     */
    omit?: BonusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BonusInclude<ExtArgs> | null
    /**
     * The filter to search for the Bonus to update in case it exists.
     */
    where: BonusWhereUniqueInput
    /**
     * In case the Bonus found by the `where` argument doesn't exist, create a new Bonus with this data.
     */
    create: XOR<BonusCreateInput, BonusUncheckedCreateInput>
    /**
     * In case the Bonus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BonusUpdateInput, BonusUncheckedUpdateInput>
  }

  /**
   * Bonus delete
   */
  export type BonusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bonus
     */
    select?: BonusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bonus
     */
    omit?: BonusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BonusInclude<ExtArgs> | null
    /**
     * Filter which Bonus to delete.
     */
    where: BonusWhereUniqueInput
  }

  /**
   * Bonus deleteMany
   */
  export type BonusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bonuses to delete
     */
    where?: BonusWhereInput
    /**
     * Limit how many Bonuses to delete.
     */
    limit?: number
  }

  /**
   * Bonus without action
   */
  export type BonusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bonus
     */
    select?: BonusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bonus
     */
    omit?: BonusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BonusInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    wallet: 'wallet',
    referralCode: 'referralCode',
    referredBy: 'referredBy',
    balance: 'balance',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const BetScalarFieldEnum: {
    id: 'id',
    betType: 'betType',
    amount: 'amount',
    createdAt: 'createdAt',
    duckId: 'duckId',
    userId: 'userId',
    raceId: 'raceId'
  };

  export type BetScalarFieldEnum = (typeof BetScalarFieldEnum)[keyof typeof BetScalarFieldEnum]


  export const RaceScalarFieldEnum: {
    id: 'id',
    status: 'status',
    liveStream: 'liveStream',
    result: 'result',
    totalWin: 'totalWin',
    totalPlace: 'totalPlace',
    totalShow: 'totalShow',
    expiredAt: 'expiredAt',
    createdAt: 'createdAt'
  };

  export type RaceScalarFieldEnum = (typeof RaceScalarFieldEnum)[keyof typeof RaceScalarFieldEnum]


  export const DuckScalarFieldEnum: {
    id: 'id',
    name: 'name',
    color: 'color',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type DuckScalarFieldEnum = (typeof DuckScalarFieldEnum)[keyof typeof DuckScalarFieldEnum]


  export const AuctionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    duckId: 'duckId',
    amount: 'amount',
    newName: 'newName',
    expiredAt: 'expiredAt',
    createdAt: 'createdAt'
  };

  export type AuctionScalarFieldEnum = (typeof AuctionScalarFieldEnum)[keyof typeof AuctionScalarFieldEnum]


  export const DepositScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    amount: 'amount',
    createdAt: 'createdAt'
  };

  export type DepositScalarFieldEnum = (typeof DepositScalarFieldEnum)[keyof typeof DepositScalarFieldEnum]


  export const BonusScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    amount: 'amount',
    createdAt: 'createdAt'
  };

  export type BonusScalarFieldEnum = (typeof BonusScalarFieldEnum)[keyof typeof BonusScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    wallet?: StringFilter<"User"> | string
    referralCode?: StringFilter<"User"> | string
    referredBy?: StringNullableFilter<"User"> | string | null
    balance?: FloatFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    Bets?: BetListRelationFilter
    Auction?: AuctionListRelationFilter
    Duck?: DuckListRelationFilter
    Deposit?: DepositListRelationFilter
    Bonus?: BonusListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    wallet?: SortOrder
    referralCode?: SortOrder
    referredBy?: SortOrderInput | SortOrder
    balance?: SortOrder
    createdAt?: SortOrder
    Bets?: BetOrderByRelationAggregateInput
    Auction?: AuctionOrderByRelationAggregateInput
    Duck?: DuckOrderByRelationAggregateInput
    Deposit?: DepositOrderByRelationAggregateInput
    Bonus?: BonusOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    wallet?: string
    referralCode?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    referredBy?: StringNullableFilter<"User"> | string | null
    balance?: FloatFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    Bets?: BetListRelationFilter
    Auction?: AuctionListRelationFilter
    Duck?: DuckListRelationFilter
    Deposit?: DepositListRelationFilter
    Bonus?: BonusListRelationFilter
  }, "id" | "wallet" | "referralCode">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    wallet?: SortOrder
    referralCode?: SortOrder
    referredBy?: SortOrderInput | SortOrder
    balance?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    wallet?: StringWithAggregatesFilter<"User"> | string
    referralCode?: StringWithAggregatesFilter<"User"> | string
    referredBy?: StringNullableWithAggregatesFilter<"User"> | string | null
    balance?: FloatWithAggregatesFilter<"User"> | number
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type BetWhereInput = {
    AND?: BetWhereInput | BetWhereInput[]
    OR?: BetWhereInput[]
    NOT?: BetWhereInput | BetWhereInput[]
    id?: StringFilter<"Bet"> | string
    betType?: StringFilter<"Bet"> | string
    amount?: FloatFilter<"Bet"> | number
    createdAt?: DateTimeFilter<"Bet"> | Date | string
    duckId?: StringFilter<"Bet"> | string
    userId?: StringFilter<"Bet"> | string
    raceId?: StringFilter<"Bet"> | string
    duck?: XOR<DuckScalarRelationFilter, DuckWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    Race?: XOR<RaceScalarRelationFilter, RaceWhereInput>
  }

  export type BetOrderByWithRelationInput = {
    id?: SortOrder
    betType?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    duckId?: SortOrder
    userId?: SortOrder
    raceId?: SortOrder
    duck?: DuckOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    Race?: RaceOrderByWithRelationInput
  }

  export type BetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BetWhereInput | BetWhereInput[]
    OR?: BetWhereInput[]
    NOT?: BetWhereInput | BetWhereInput[]
    betType?: StringFilter<"Bet"> | string
    amount?: FloatFilter<"Bet"> | number
    createdAt?: DateTimeFilter<"Bet"> | Date | string
    duckId?: StringFilter<"Bet"> | string
    userId?: StringFilter<"Bet"> | string
    raceId?: StringFilter<"Bet"> | string
    duck?: XOR<DuckScalarRelationFilter, DuckWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    Race?: XOR<RaceScalarRelationFilter, RaceWhereInput>
  }, "id">

  export type BetOrderByWithAggregationInput = {
    id?: SortOrder
    betType?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    duckId?: SortOrder
    userId?: SortOrder
    raceId?: SortOrder
    _count?: BetCountOrderByAggregateInput
    _avg?: BetAvgOrderByAggregateInput
    _max?: BetMaxOrderByAggregateInput
    _min?: BetMinOrderByAggregateInput
    _sum?: BetSumOrderByAggregateInput
  }

  export type BetScalarWhereWithAggregatesInput = {
    AND?: BetScalarWhereWithAggregatesInput | BetScalarWhereWithAggregatesInput[]
    OR?: BetScalarWhereWithAggregatesInput[]
    NOT?: BetScalarWhereWithAggregatesInput | BetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Bet"> | string
    betType?: StringWithAggregatesFilter<"Bet"> | string
    amount?: FloatWithAggregatesFilter<"Bet"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Bet"> | Date | string
    duckId?: StringWithAggregatesFilter<"Bet"> | string
    userId?: StringWithAggregatesFilter<"Bet"> | string
    raceId?: StringWithAggregatesFilter<"Bet"> | string
  }

  export type RaceWhereInput = {
    AND?: RaceWhereInput | RaceWhereInput[]
    OR?: RaceWhereInput[]
    NOT?: RaceWhereInput | RaceWhereInput[]
    id?: StringFilter<"Race"> | string
    status?: StringFilter<"Race"> | string
    liveStream?: StringFilter<"Race"> | string
    result?: StringNullableListFilter<"Race">
    totalWin?: FloatFilter<"Race"> | number
    totalPlace?: FloatFilter<"Race"> | number
    totalShow?: FloatFilter<"Race"> | number
    expiredAt?: DateTimeFilter<"Race"> | Date | string
    createdAt?: DateTimeFilter<"Race"> | Date | string
    bets?: BetListRelationFilter
  }

  export type RaceOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    liveStream?: SortOrder
    result?: SortOrder
    totalWin?: SortOrder
    totalPlace?: SortOrder
    totalShow?: SortOrder
    expiredAt?: SortOrder
    createdAt?: SortOrder
    bets?: BetOrderByRelationAggregateInput
  }

  export type RaceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RaceWhereInput | RaceWhereInput[]
    OR?: RaceWhereInput[]
    NOT?: RaceWhereInput | RaceWhereInput[]
    status?: StringFilter<"Race"> | string
    liveStream?: StringFilter<"Race"> | string
    result?: StringNullableListFilter<"Race">
    totalWin?: FloatFilter<"Race"> | number
    totalPlace?: FloatFilter<"Race"> | number
    totalShow?: FloatFilter<"Race"> | number
    expiredAt?: DateTimeFilter<"Race"> | Date | string
    createdAt?: DateTimeFilter<"Race"> | Date | string
    bets?: BetListRelationFilter
  }, "id">

  export type RaceOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    liveStream?: SortOrder
    result?: SortOrder
    totalWin?: SortOrder
    totalPlace?: SortOrder
    totalShow?: SortOrder
    expiredAt?: SortOrder
    createdAt?: SortOrder
    _count?: RaceCountOrderByAggregateInput
    _avg?: RaceAvgOrderByAggregateInput
    _max?: RaceMaxOrderByAggregateInput
    _min?: RaceMinOrderByAggregateInput
    _sum?: RaceSumOrderByAggregateInput
  }

  export type RaceScalarWhereWithAggregatesInput = {
    AND?: RaceScalarWhereWithAggregatesInput | RaceScalarWhereWithAggregatesInput[]
    OR?: RaceScalarWhereWithAggregatesInput[]
    NOT?: RaceScalarWhereWithAggregatesInput | RaceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Race"> | string
    status?: StringWithAggregatesFilter<"Race"> | string
    liveStream?: StringWithAggregatesFilter<"Race"> | string
    result?: StringNullableListFilter<"Race">
    totalWin?: FloatWithAggregatesFilter<"Race"> | number
    totalPlace?: FloatWithAggregatesFilter<"Race"> | number
    totalShow?: FloatWithAggregatesFilter<"Race"> | number
    expiredAt?: DateTimeWithAggregatesFilter<"Race"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Race"> | Date | string
  }

  export type DuckWhereInput = {
    AND?: DuckWhereInput | DuckWhereInput[]
    OR?: DuckWhereInput[]
    NOT?: DuckWhereInput | DuckWhereInput[]
    id?: StringFilter<"Duck"> | string
    name?: StringFilter<"Duck"> | string
    color?: StringFilter<"Duck"> | string
    userId?: StringNullableFilter<"Duck"> | string | null
    createdAt?: DateTimeFilter<"Duck"> | Date | string
    sponsoredBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    Bet?: BetListRelationFilter
    Auction?: AuctionListRelationFilter
  }

  export type DuckOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    sponsoredBy?: UserOrderByWithRelationInput
    Bet?: BetOrderByRelationAggregateInput
    Auction?: AuctionOrderByRelationAggregateInput
  }

  export type DuckWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DuckWhereInput | DuckWhereInput[]
    OR?: DuckWhereInput[]
    NOT?: DuckWhereInput | DuckWhereInput[]
    name?: StringFilter<"Duck"> | string
    color?: StringFilter<"Duck"> | string
    userId?: StringNullableFilter<"Duck"> | string | null
    createdAt?: DateTimeFilter<"Duck"> | Date | string
    sponsoredBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    Bet?: BetListRelationFilter
    Auction?: AuctionListRelationFilter
  }, "id">

  export type DuckOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: DuckCountOrderByAggregateInput
    _max?: DuckMaxOrderByAggregateInput
    _min?: DuckMinOrderByAggregateInput
  }

  export type DuckScalarWhereWithAggregatesInput = {
    AND?: DuckScalarWhereWithAggregatesInput | DuckScalarWhereWithAggregatesInput[]
    OR?: DuckScalarWhereWithAggregatesInput[]
    NOT?: DuckScalarWhereWithAggregatesInput | DuckScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Duck"> | string
    name?: StringWithAggregatesFilter<"Duck"> | string
    color?: StringWithAggregatesFilter<"Duck"> | string
    userId?: StringNullableWithAggregatesFilter<"Duck"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Duck"> | Date | string
  }

  export type AuctionWhereInput = {
    AND?: AuctionWhereInput | AuctionWhereInput[]
    OR?: AuctionWhereInput[]
    NOT?: AuctionWhereInput | AuctionWhereInput[]
    id?: StringFilter<"Auction"> | string
    userId?: StringNullableFilter<"Auction"> | string | null
    duckId?: StringFilter<"Auction"> | string
    amount?: FloatFilter<"Auction"> | number
    newName?: StringFilter<"Auction"> | string
    expiredAt?: DateTimeFilter<"Auction"> | Date | string
    createdAt?: DateTimeFilter<"Auction"> | Date | string
    duck?: XOR<DuckScalarRelationFilter, DuckWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type AuctionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    duckId?: SortOrder
    amount?: SortOrder
    newName?: SortOrder
    expiredAt?: SortOrder
    createdAt?: SortOrder
    duck?: DuckOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type AuctionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuctionWhereInput | AuctionWhereInput[]
    OR?: AuctionWhereInput[]
    NOT?: AuctionWhereInput | AuctionWhereInput[]
    userId?: StringNullableFilter<"Auction"> | string | null
    duckId?: StringFilter<"Auction"> | string
    amount?: FloatFilter<"Auction"> | number
    newName?: StringFilter<"Auction"> | string
    expiredAt?: DateTimeFilter<"Auction"> | Date | string
    createdAt?: DateTimeFilter<"Auction"> | Date | string
    duck?: XOR<DuckScalarRelationFilter, DuckWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type AuctionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    duckId?: SortOrder
    amount?: SortOrder
    newName?: SortOrder
    expiredAt?: SortOrder
    createdAt?: SortOrder
    _count?: AuctionCountOrderByAggregateInput
    _avg?: AuctionAvgOrderByAggregateInput
    _max?: AuctionMaxOrderByAggregateInput
    _min?: AuctionMinOrderByAggregateInput
    _sum?: AuctionSumOrderByAggregateInput
  }

  export type AuctionScalarWhereWithAggregatesInput = {
    AND?: AuctionScalarWhereWithAggregatesInput | AuctionScalarWhereWithAggregatesInput[]
    OR?: AuctionScalarWhereWithAggregatesInput[]
    NOT?: AuctionScalarWhereWithAggregatesInput | AuctionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Auction"> | string
    userId?: StringNullableWithAggregatesFilter<"Auction"> | string | null
    duckId?: StringWithAggregatesFilter<"Auction"> | string
    amount?: FloatWithAggregatesFilter<"Auction"> | number
    newName?: StringWithAggregatesFilter<"Auction"> | string
    expiredAt?: DateTimeWithAggregatesFilter<"Auction"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Auction"> | Date | string
  }

  export type DepositWhereInput = {
    AND?: DepositWhereInput | DepositWhereInput[]
    OR?: DepositWhereInput[]
    NOT?: DepositWhereInput | DepositWhereInput[]
    id?: StringFilter<"Deposit"> | string
    userId?: StringFilter<"Deposit"> | string
    amount?: FloatFilter<"Deposit"> | number
    createdAt?: DateTimeFilter<"Deposit"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type DepositOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type DepositWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DepositWhereInput | DepositWhereInput[]
    OR?: DepositWhereInput[]
    NOT?: DepositWhereInput | DepositWhereInput[]
    userId?: StringFilter<"Deposit"> | string
    amount?: FloatFilter<"Deposit"> | number
    createdAt?: DateTimeFilter<"Deposit"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type DepositOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    _count?: DepositCountOrderByAggregateInput
    _avg?: DepositAvgOrderByAggregateInput
    _max?: DepositMaxOrderByAggregateInput
    _min?: DepositMinOrderByAggregateInput
    _sum?: DepositSumOrderByAggregateInput
  }

  export type DepositScalarWhereWithAggregatesInput = {
    AND?: DepositScalarWhereWithAggregatesInput | DepositScalarWhereWithAggregatesInput[]
    OR?: DepositScalarWhereWithAggregatesInput[]
    NOT?: DepositScalarWhereWithAggregatesInput | DepositScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Deposit"> | string
    userId?: StringWithAggregatesFilter<"Deposit"> | string
    amount?: FloatWithAggregatesFilter<"Deposit"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Deposit"> | Date | string
  }

  export type BonusWhereInput = {
    AND?: BonusWhereInput | BonusWhereInput[]
    OR?: BonusWhereInput[]
    NOT?: BonusWhereInput | BonusWhereInput[]
    id?: StringFilter<"Bonus"> | string
    userId?: StringFilter<"Bonus"> | string
    amount?: FloatFilter<"Bonus"> | number
    createdAt?: DateTimeFilter<"Bonus"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type BonusOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type BonusWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BonusWhereInput | BonusWhereInput[]
    OR?: BonusWhereInput[]
    NOT?: BonusWhereInput | BonusWhereInput[]
    userId?: StringFilter<"Bonus"> | string
    amount?: FloatFilter<"Bonus"> | number
    createdAt?: DateTimeFilter<"Bonus"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type BonusOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    _count?: BonusCountOrderByAggregateInput
    _avg?: BonusAvgOrderByAggregateInput
    _max?: BonusMaxOrderByAggregateInput
    _min?: BonusMinOrderByAggregateInput
    _sum?: BonusSumOrderByAggregateInput
  }

  export type BonusScalarWhereWithAggregatesInput = {
    AND?: BonusScalarWhereWithAggregatesInput | BonusScalarWhereWithAggregatesInput[]
    OR?: BonusScalarWhereWithAggregatesInput[]
    NOT?: BonusScalarWhereWithAggregatesInput | BonusScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Bonus"> | string
    userId?: StringWithAggregatesFilter<"Bonus"> | string
    amount?: FloatWithAggregatesFilter<"Bonus"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Bonus"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    wallet: string
    referralCode: string
    referredBy?: string | null
    balance?: number
    createdAt?: Date | string
    Bets?: BetCreateNestedManyWithoutUserInput
    Auction?: AuctionCreateNestedManyWithoutUserInput
    Duck?: DuckCreateNestedManyWithoutSponsoredByInput
    Deposit?: DepositCreateNestedManyWithoutUserInput
    Bonus?: BonusCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    wallet: string
    referralCode: string
    referredBy?: string | null
    balance?: number
    createdAt?: Date | string
    Bets?: BetUncheckedCreateNestedManyWithoutUserInput
    Auction?: AuctionUncheckedCreateNestedManyWithoutUserInput
    Duck?: DuckUncheckedCreateNestedManyWithoutSponsoredByInput
    Deposit?: DepositUncheckedCreateNestedManyWithoutUserInput
    Bonus?: BonusUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    wallet?: StringFieldUpdateOperationsInput | string
    referralCode?: StringFieldUpdateOperationsInput | string
    referredBy?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Bets?: BetUpdateManyWithoutUserNestedInput
    Auction?: AuctionUpdateManyWithoutUserNestedInput
    Duck?: DuckUpdateManyWithoutSponsoredByNestedInput
    Deposit?: DepositUpdateManyWithoutUserNestedInput
    Bonus?: BonusUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    wallet?: StringFieldUpdateOperationsInput | string
    referralCode?: StringFieldUpdateOperationsInput | string
    referredBy?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Bets?: BetUncheckedUpdateManyWithoutUserNestedInput
    Auction?: AuctionUncheckedUpdateManyWithoutUserNestedInput
    Duck?: DuckUncheckedUpdateManyWithoutSponsoredByNestedInput
    Deposit?: DepositUncheckedUpdateManyWithoutUserNestedInput
    Bonus?: BonusUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    wallet: string
    referralCode: string
    referredBy?: string | null
    balance?: number
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    wallet?: StringFieldUpdateOperationsInput | string
    referralCode?: StringFieldUpdateOperationsInput | string
    referredBy?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    wallet?: StringFieldUpdateOperationsInput | string
    referralCode?: StringFieldUpdateOperationsInput | string
    referredBy?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BetCreateInput = {
    id?: string
    betType: string
    amount: number
    createdAt?: Date | string
    duck: DuckCreateNestedOneWithoutBetInput
    user: UserCreateNestedOneWithoutBetsInput
    Race: RaceCreateNestedOneWithoutBetsInput
  }

  export type BetUncheckedCreateInput = {
    id?: string
    betType: string
    amount: number
    createdAt?: Date | string
    duckId: string
    userId: string
    raceId: string
  }

  export type BetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    betType?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    duck?: DuckUpdateOneRequiredWithoutBetNestedInput
    user?: UserUpdateOneRequiredWithoutBetsNestedInput
    Race?: RaceUpdateOneRequiredWithoutBetsNestedInput
  }

  export type BetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    betType?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    duckId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    raceId?: StringFieldUpdateOperationsInput | string
  }

  export type BetCreateManyInput = {
    id?: string
    betType: string
    amount: number
    createdAt?: Date | string
    duckId: string
    userId: string
    raceId: string
  }

  export type BetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    betType?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    betType?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    duckId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    raceId?: StringFieldUpdateOperationsInput | string
  }

  export type RaceCreateInput = {
    id?: string
    status: string
    liveStream: string
    result?: RaceCreateresultInput | string[]
    totalWin: number
    totalPlace: number
    totalShow: number
    expiredAt: Date | string
    createdAt?: Date | string
    bets?: BetCreateNestedManyWithoutRaceInput
  }

  export type RaceUncheckedCreateInput = {
    id?: string
    status: string
    liveStream: string
    result?: RaceCreateresultInput | string[]
    totalWin: number
    totalPlace: number
    totalShow: number
    expiredAt: Date | string
    createdAt?: Date | string
    bets?: BetUncheckedCreateNestedManyWithoutRaceInput
  }

  export type RaceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    liveStream?: StringFieldUpdateOperationsInput | string
    result?: RaceUpdateresultInput | string[]
    totalWin?: FloatFieldUpdateOperationsInput | number
    totalPlace?: FloatFieldUpdateOperationsInput | number
    totalShow?: FloatFieldUpdateOperationsInput | number
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bets?: BetUpdateManyWithoutRaceNestedInput
  }

  export type RaceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    liveStream?: StringFieldUpdateOperationsInput | string
    result?: RaceUpdateresultInput | string[]
    totalWin?: FloatFieldUpdateOperationsInput | number
    totalPlace?: FloatFieldUpdateOperationsInput | number
    totalShow?: FloatFieldUpdateOperationsInput | number
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bets?: BetUncheckedUpdateManyWithoutRaceNestedInput
  }

  export type RaceCreateManyInput = {
    id?: string
    status: string
    liveStream: string
    result?: RaceCreateresultInput | string[]
    totalWin: number
    totalPlace: number
    totalShow: number
    expiredAt: Date | string
    createdAt?: Date | string
  }

  export type RaceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    liveStream?: StringFieldUpdateOperationsInput | string
    result?: RaceUpdateresultInput | string[]
    totalWin?: FloatFieldUpdateOperationsInput | number
    totalPlace?: FloatFieldUpdateOperationsInput | number
    totalShow?: FloatFieldUpdateOperationsInput | number
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RaceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    liveStream?: StringFieldUpdateOperationsInput | string
    result?: RaceUpdateresultInput | string[]
    totalWin?: FloatFieldUpdateOperationsInput | number
    totalPlace?: FloatFieldUpdateOperationsInput | number
    totalShow?: FloatFieldUpdateOperationsInput | number
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DuckCreateInput = {
    id?: string
    name: string
    color: string
    createdAt?: Date | string
    sponsoredBy?: UserCreateNestedOneWithoutDuckInput
    Bet?: BetCreateNestedManyWithoutDuckInput
    Auction?: AuctionCreateNestedManyWithoutDuckInput
  }

  export type DuckUncheckedCreateInput = {
    id?: string
    name: string
    color: string
    userId?: string | null
    createdAt?: Date | string
    Bet?: BetUncheckedCreateNestedManyWithoutDuckInput
    Auction?: AuctionUncheckedCreateNestedManyWithoutDuckInput
  }

  export type DuckUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sponsoredBy?: UserUpdateOneWithoutDuckNestedInput
    Bet?: BetUpdateManyWithoutDuckNestedInput
    Auction?: AuctionUpdateManyWithoutDuckNestedInput
  }

  export type DuckUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Bet?: BetUncheckedUpdateManyWithoutDuckNestedInput
    Auction?: AuctionUncheckedUpdateManyWithoutDuckNestedInput
  }

  export type DuckCreateManyInput = {
    id?: string
    name: string
    color: string
    userId?: string | null
    createdAt?: Date | string
  }

  export type DuckUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DuckUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuctionCreateInput = {
    id?: string
    amount?: number
    newName: string
    expiredAt: Date | string
    createdAt?: Date | string
    duck: DuckCreateNestedOneWithoutAuctionInput
    user?: UserCreateNestedOneWithoutAuctionInput
  }

  export type AuctionUncheckedCreateInput = {
    id?: string
    userId?: string | null
    duckId: string
    amount?: number
    newName: string
    expiredAt: Date | string
    createdAt?: Date | string
  }

  export type AuctionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    newName?: StringFieldUpdateOperationsInput | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    duck?: DuckUpdateOneRequiredWithoutAuctionNestedInput
    user?: UserUpdateOneWithoutAuctionNestedInput
  }

  export type AuctionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    duckId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    newName?: StringFieldUpdateOperationsInput | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuctionCreateManyInput = {
    id?: string
    userId?: string | null
    duckId: string
    amount?: number
    newName: string
    expiredAt: Date | string
    createdAt?: Date | string
  }

  export type AuctionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    newName?: StringFieldUpdateOperationsInput | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuctionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    duckId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    newName?: StringFieldUpdateOperationsInput | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepositCreateInput = {
    id?: string
    amount: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutDepositInput
  }

  export type DepositUncheckedCreateInput = {
    id?: string
    userId: string
    amount: number
    createdAt?: Date | string
  }

  export type DepositUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDepositNestedInput
  }

  export type DepositUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepositCreateManyInput = {
    id?: string
    userId: string
    amount: number
    createdAt?: Date | string
  }

  export type DepositUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepositUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BonusCreateInput = {
    id?: string
    amount: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutBonusInput
  }

  export type BonusUncheckedCreateInput = {
    id?: string
    userId: string
    amount: number
    createdAt?: Date | string
  }

  export type BonusUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBonusNestedInput
  }

  export type BonusUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BonusCreateManyInput = {
    id?: string
    userId: string
    amount: number
    createdAt?: Date | string
  }

  export type BonusUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BonusUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BetListRelationFilter = {
    every?: BetWhereInput
    some?: BetWhereInput
    none?: BetWhereInput
  }

  export type AuctionListRelationFilter = {
    every?: AuctionWhereInput
    some?: AuctionWhereInput
    none?: AuctionWhereInput
  }

  export type DuckListRelationFilter = {
    every?: DuckWhereInput
    some?: DuckWhereInput
    none?: DuckWhereInput
  }

  export type DepositListRelationFilter = {
    every?: DepositWhereInput
    some?: DepositWhereInput
    none?: DepositWhereInput
  }

  export type BonusListRelationFilter = {
    every?: BonusWhereInput
    some?: BonusWhereInput
    none?: BonusWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuctionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DuckOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DepositOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BonusOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    wallet?: SortOrder
    referralCode?: SortOrder
    referredBy?: SortOrder
    balance?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    balance?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    wallet?: SortOrder
    referralCode?: SortOrder
    referredBy?: SortOrder
    balance?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    wallet?: SortOrder
    referralCode?: SortOrder
    referredBy?: SortOrder
    balance?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    balance?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DuckScalarRelationFilter = {
    is?: DuckWhereInput
    isNot?: DuckWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type RaceScalarRelationFilter = {
    is?: RaceWhereInput
    isNot?: RaceWhereInput
  }

  export type BetCountOrderByAggregateInput = {
    id?: SortOrder
    betType?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    duckId?: SortOrder
    userId?: SortOrder
    raceId?: SortOrder
  }

  export type BetAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type BetMaxOrderByAggregateInput = {
    id?: SortOrder
    betType?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    duckId?: SortOrder
    userId?: SortOrder
    raceId?: SortOrder
  }

  export type BetMinOrderByAggregateInput = {
    id?: SortOrder
    betType?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    duckId?: SortOrder
    userId?: SortOrder
    raceId?: SortOrder
  }

  export type BetSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type RaceCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    liveStream?: SortOrder
    result?: SortOrder
    totalWin?: SortOrder
    totalPlace?: SortOrder
    totalShow?: SortOrder
    expiredAt?: SortOrder
    createdAt?: SortOrder
  }

  export type RaceAvgOrderByAggregateInput = {
    totalWin?: SortOrder
    totalPlace?: SortOrder
    totalShow?: SortOrder
  }

  export type RaceMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    liveStream?: SortOrder
    totalWin?: SortOrder
    totalPlace?: SortOrder
    totalShow?: SortOrder
    expiredAt?: SortOrder
    createdAt?: SortOrder
  }

  export type RaceMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    liveStream?: SortOrder
    totalWin?: SortOrder
    totalPlace?: SortOrder
    totalShow?: SortOrder
    expiredAt?: SortOrder
    createdAt?: SortOrder
  }

  export type RaceSumOrderByAggregateInput = {
    totalWin?: SortOrder
    totalPlace?: SortOrder
    totalShow?: SortOrder
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type DuckCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type DuckMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type DuckMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type AuctionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    duckId?: SortOrder
    amount?: SortOrder
    newName?: SortOrder
    expiredAt?: SortOrder
    createdAt?: SortOrder
  }

  export type AuctionAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type AuctionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    duckId?: SortOrder
    amount?: SortOrder
    newName?: SortOrder
    expiredAt?: SortOrder
    createdAt?: SortOrder
  }

  export type AuctionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    duckId?: SortOrder
    amount?: SortOrder
    newName?: SortOrder
    expiredAt?: SortOrder
    createdAt?: SortOrder
  }

  export type AuctionSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type DepositCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
  }

  export type DepositAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type DepositMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
  }

  export type DepositMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
  }

  export type DepositSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type BonusCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
  }

  export type BonusAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type BonusMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
  }

  export type BonusMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
  }

  export type BonusSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type BetCreateNestedManyWithoutUserInput = {
    create?: XOR<BetCreateWithoutUserInput, BetUncheckedCreateWithoutUserInput> | BetCreateWithoutUserInput[] | BetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BetCreateOrConnectWithoutUserInput | BetCreateOrConnectWithoutUserInput[]
    createMany?: BetCreateManyUserInputEnvelope
    connect?: BetWhereUniqueInput | BetWhereUniqueInput[]
  }

  export type AuctionCreateNestedManyWithoutUserInput = {
    create?: XOR<AuctionCreateWithoutUserInput, AuctionUncheckedCreateWithoutUserInput> | AuctionCreateWithoutUserInput[] | AuctionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuctionCreateOrConnectWithoutUserInput | AuctionCreateOrConnectWithoutUserInput[]
    createMany?: AuctionCreateManyUserInputEnvelope
    connect?: AuctionWhereUniqueInput | AuctionWhereUniqueInput[]
  }

  export type DuckCreateNestedManyWithoutSponsoredByInput = {
    create?: XOR<DuckCreateWithoutSponsoredByInput, DuckUncheckedCreateWithoutSponsoredByInput> | DuckCreateWithoutSponsoredByInput[] | DuckUncheckedCreateWithoutSponsoredByInput[]
    connectOrCreate?: DuckCreateOrConnectWithoutSponsoredByInput | DuckCreateOrConnectWithoutSponsoredByInput[]
    createMany?: DuckCreateManySponsoredByInputEnvelope
    connect?: DuckWhereUniqueInput | DuckWhereUniqueInput[]
  }

  export type DepositCreateNestedManyWithoutUserInput = {
    create?: XOR<DepositCreateWithoutUserInput, DepositUncheckedCreateWithoutUserInput> | DepositCreateWithoutUserInput[] | DepositUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DepositCreateOrConnectWithoutUserInput | DepositCreateOrConnectWithoutUserInput[]
    createMany?: DepositCreateManyUserInputEnvelope
    connect?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
  }

  export type BonusCreateNestedManyWithoutUserInput = {
    create?: XOR<BonusCreateWithoutUserInput, BonusUncheckedCreateWithoutUserInput> | BonusCreateWithoutUserInput[] | BonusUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BonusCreateOrConnectWithoutUserInput | BonusCreateOrConnectWithoutUserInput[]
    createMany?: BonusCreateManyUserInputEnvelope
    connect?: BonusWhereUniqueInput | BonusWhereUniqueInput[]
  }

  export type BetUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BetCreateWithoutUserInput, BetUncheckedCreateWithoutUserInput> | BetCreateWithoutUserInput[] | BetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BetCreateOrConnectWithoutUserInput | BetCreateOrConnectWithoutUserInput[]
    createMany?: BetCreateManyUserInputEnvelope
    connect?: BetWhereUniqueInput | BetWhereUniqueInput[]
  }

  export type AuctionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AuctionCreateWithoutUserInput, AuctionUncheckedCreateWithoutUserInput> | AuctionCreateWithoutUserInput[] | AuctionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuctionCreateOrConnectWithoutUserInput | AuctionCreateOrConnectWithoutUserInput[]
    createMany?: AuctionCreateManyUserInputEnvelope
    connect?: AuctionWhereUniqueInput | AuctionWhereUniqueInput[]
  }

  export type DuckUncheckedCreateNestedManyWithoutSponsoredByInput = {
    create?: XOR<DuckCreateWithoutSponsoredByInput, DuckUncheckedCreateWithoutSponsoredByInput> | DuckCreateWithoutSponsoredByInput[] | DuckUncheckedCreateWithoutSponsoredByInput[]
    connectOrCreate?: DuckCreateOrConnectWithoutSponsoredByInput | DuckCreateOrConnectWithoutSponsoredByInput[]
    createMany?: DuckCreateManySponsoredByInputEnvelope
    connect?: DuckWhereUniqueInput | DuckWhereUniqueInput[]
  }

  export type DepositUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DepositCreateWithoutUserInput, DepositUncheckedCreateWithoutUserInput> | DepositCreateWithoutUserInput[] | DepositUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DepositCreateOrConnectWithoutUserInput | DepositCreateOrConnectWithoutUserInput[]
    createMany?: DepositCreateManyUserInputEnvelope
    connect?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
  }

  export type BonusUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BonusCreateWithoutUserInput, BonusUncheckedCreateWithoutUserInput> | BonusCreateWithoutUserInput[] | BonusUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BonusCreateOrConnectWithoutUserInput | BonusCreateOrConnectWithoutUserInput[]
    createMany?: BonusCreateManyUserInputEnvelope
    connect?: BonusWhereUniqueInput | BonusWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BetUpdateManyWithoutUserNestedInput = {
    create?: XOR<BetCreateWithoutUserInput, BetUncheckedCreateWithoutUserInput> | BetCreateWithoutUserInput[] | BetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BetCreateOrConnectWithoutUserInput | BetCreateOrConnectWithoutUserInput[]
    upsert?: BetUpsertWithWhereUniqueWithoutUserInput | BetUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BetCreateManyUserInputEnvelope
    set?: BetWhereUniqueInput | BetWhereUniqueInput[]
    disconnect?: BetWhereUniqueInput | BetWhereUniqueInput[]
    delete?: BetWhereUniqueInput | BetWhereUniqueInput[]
    connect?: BetWhereUniqueInput | BetWhereUniqueInput[]
    update?: BetUpdateWithWhereUniqueWithoutUserInput | BetUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BetUpdateManyWithWhereWithoutUserInput | BetUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BetScalarWhereInput | BetScalarWhereInput[]
  }

  export type AuctionUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuctionCreateWithoutUserInput, AuctionUncheckedCreateWithoutUserInput> | AuctionCreateWithoutUserInput[] | AuctionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuctionCreateOrConnectWithoutUserInput | AuctionCreateOrConnectWithoutUserInput[]
    upsert?: AuctionUpsertWithWhereUniqueWithoutUserInput | AuctionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuctionCreateManyUserInputEnvelope
    set?: AuctionWhereUniqueInput | AuctionWhereUniqueInput[]
    disconnect?: AuctionWhereUniqueInput | AuctionWhereUniqueInput[]
    delete?: AuctionWhereUniqueInput | AuctionWhereUniqueInput[]
    connect?: AuctionWhereUniqueInput | AuctionWhereUniqueInput[]
    update?: AuctionUpdateWithWhereUniqueWithoutUserInput | AuctionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuctionUpdateManyWithWhereWithoutUserInput | AuctionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuctionScalarWhereInput | AuctionScalarWhereInput[]
  }

  export type DuckUpdateManyWithoutSponsoredByNestedInput = {
    create?: XOR<DuckCreateWithoutSponsoredByInput, DuckUncheckedCreateWithoutSponsoredByInput> | DuckCreateWithoutSponsoredByInput[] | DuckUncheckedCreateWithoutSponsoredByInput[]
    connectOrCreate?: DuckCreateOrConnectWithoutSponsoredByInput | DuckCreateOrConnectWithoutSponsoredByInput[]
    upsert?: DuckUpsertWithWhereUniqueWithoutSponsoredByInput | DuckUpsertWithWhereUniqueWithoutSponsoredByInput[]
    createMany?: DuckCreateManySponsoredByInputEnvelope
    set?: DuckWhereUniqueInput | DuckWhereUniqueInput[]
    disconnect?: DuckWhereUniqueInput | DuckWhereUniqueInput[]
    delete?: DuckWhereUniqueInput | DuckWhereUniqueInput[]
    connect?: DuckWhereUniqueInput | DuckWhereUniqueInput[]
    update?: DuckUpdateWithWhereUniqueWithoutSponsoredByInput | DuckUpdateWithWhereUniqueWithoutSponsoredByInput[]
    updateMany?: DuckUpdateManyWithWhereWithoutSponsoredByInput | DuckUpdateManyWithWhereWithoutSponsoredByInput[]
    deleteMany?: DuckScalarWhereInput | DuckScalarWhereInput[]
  }

  export type DepositUpdateManyWithoutUserNestedInput = {
    create?: XOR<DepositCreateWithoutUserInput, DepositUncheckedCreateWithoutUserInput> | DepositCreateWithoutUserInput[] | DepositUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DepositCreateOrConnectWithoutUserInput | DepositCreateOrConnectWithoutUserInput[]
    upsert?: DepositUpsertWithWhereUniqueWithoutUserInput | DepositUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DepositCreateManyUserInputEnvelope
    set?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
    disconnect?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
    delete?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
    connect?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
    update?: DepositUpdateWithWhereUniqueWithoutUserInput | DepositUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DepositUpdateManyWithWhereWithoutUserInput | DepositUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DepositScalarWhereInput | DepositScalarWhereInput[]
  }

  export type BonusUpdateManyWithoutUserNestedInput = {
    create?: XOR<BonusCreateWithoutUserInput, BonusUncheckedCreateWithoutUserInput> | BonusCreateWithoutUserInput[] | BonusUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BonusCreateOrConnectWithoutUserInput | BonusCreateOrConnectWithoutUserInput[]
    upsert?: BonusUpsertWithWhereUniqueWithoutUserInput | BonusUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BonusCreateManyUserInputEnvelope
    set?: BonusWhereUniqueInput | BonusWhereUniqueInput[]
    disconnect?: BonusWhereUniqueInput | BonusWhereUniqueInput[]
    delete?: BonusWhereUniqueInput | BonusWhereUniqueInput[]
    connect?: BonusWhereUniqueInput | BonusWhereUniqueInput[]
    update?: BonusUpdateWithWhereUniqueWithoutUserInput | BonusUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BonusUpdateManyWithWhereWithoutUserInput | BonusUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BonusScalarWhereInput | BonusScalarWhereInput[]
  }

  export type BetUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BetCreateWithoutUserInput, BetUncheckedCreateWithoutUserInput> | BetCreateWithoutUserInput[] | BetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BetCreateOrConnectWithoutUserInput | BetCreateOrConnectWithoutUserInput[]
    upsert?: BetUpsertWithWhereUniqueWithoutUserInput | BetUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BetCreateManyUserInputEnvelope
    set?: BetWhereUniqueInput | BetWhereUniqueInput[]
    disconnect?: BetWhereUniqueInput | BetWhereUniqueInput[]
    delete?: BetWhereUniqueInput | BetWhereUniqueInput[]
    connect?: BetWhereUniqueInput | BetWhereUniqueInput[]
    update?: BetUpdateWithWhereUniqueWithoutUserInput | BetUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BetUpdateManyWithWhereWithoutUserInput | BetUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BetScalarWhereInput | BetScalarWhereInput[]
  }

  export type AuctionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuctionCreateWithoutUserInput, AuctionUncheckedCreateWithoutUserInput> | AuctionCreateWithoutUserInput[] | AuctionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuctionCreateOrConnectWithoutUserInput | AuctionCreateOrConnectWithoutUserInput[]
    upsert?: AuctionUpsertWithWhereUniqueWithoutUserInput | AuctionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuctionCreateManyUserInputEnvelope
    set?: AuctionWhereUniqueInput | AuctionWhereUniqueInput[]
    disconnect?: AuctionWhereUniqueInput | AuctionWhereUniqueInput[]
    delete?: AuctionWhereUniqueInput | AuctionWhereUniqueInput[]
    connect?: AuctionWhereUniqueInput | AuctionWhereUniqueInput[]
    update?: AuctionUpdateWithWhereUniqueWithoutUserInput | AuctionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuctionUpdateManyWithWhereWithoutUserInput | AuctionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuctionScalarWhereInput | AuctionScalarWhereInput[]
  }

  export type DuckUncheckedUpdateManyWithoutSponsoredByNestedInput = {
    create?: XOR<DuckCreateWithoutSponsoredByInput, DuckUncheckedCreateWithoutSponsoredByInput> | DuckCreateWithoutSponsoredByInput[] | DuckUncheckedCreateWithoutSponsoredByInput[]
    connectOrCreate?: DuckCreateOrConnectWithoutSponsoredByInput | DuckCreateOrConnectWithoutSponsoredByInput[]
    upsert?: DuckUpsertWithWhereUniqueWithoutSponsoredByInput | DuckUpsertWithWhereUniqueWithoutSponsoredByInput[]
    createMany?: DuckCreateManySponsoredByInputEnvelope
    set?: DuckWhereUniqueInput | DuckWhereUniqueInput[]
    disconnect?: DuckWhereUniqueInput | DuckWhereUniqueInput[]
    delete?: DuckWhereUniqueInput | DuckWhereUniqueInput[]
    connect?: DuckWhereUniqueInput | DuckWhereUniqueInput[]
    update?: DuckUpdateWithWhereUniqueWithoutSponsoredByInput | DuckUpdateWithWhereUniqueWithoutSponsoredByInput[]
    updateMany?: DuckUpdateManyWithWhereWithoutSponsoredByInput | DuckUpdateManyWithWhereWithoutSponsoredByInput[]
    deleteMany?: DuckScalarWhereInput | DuckScalarWhereInput[]
  }

  export type DepositUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DepositCreateWithoutUserInput, DepositUncheckedCreateWithoutUserInput> | DepositCreateWithoutUserInput[] | DepositUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DepositCreateOrConnectWithoutUserInput | DepositCreateOrConnectWithoutUserInput[]
    upsert?: DepositUpsertWithWhereUniqueWithoutUserInput | DepositUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DepositCreateManyUserInputEnvelope
    set?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
    disconnect?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
    delete?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
    connect?: DepositWhereUniqueInput | DepositWhereUniqueInput[]
    update?: DepositUpdateWithWhereUniqueWithoutUserInput | DepositUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DepositUpdateManyWithWhereWithoutUserInput | DepositUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DepositScalarWhereInput | DepositScalarWhereInput[]
  }

  export type BonusUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BonusCreateWithoutUserInput, BonusUncheckedCreateWithoutUserInput> | BonusCreateWithoutUserInput[] | BonusUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BonusCreateOrConnectWithoutUserInput | BonusCreateOrConnectWithoutUserInput[]
    upsert?: BonusUpsertWithWhereUniqueWithoutUserInput | BonusUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BonusCreateManyUserInputEnvelope
    set?: BonusWhereUniqueInput | BonusWhereUniqueInput[]
    disconnect?: BonusWhereUniqueInput | BonusWhereUniqueInput[]
    delete?: BonusWhereUniqueInput | BonusWhereUniqueInput[]
    connect?: BonusWhereUniqueInput | BonusWhereUniqueInput[]
    update?: BonusUpdateWithWhereUniqueWithoutUserInput | BonusUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BonusUpdateManyWithWhereWithoutUserInput | BonusUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BonusScalarWhereInput | BonusScalarWhereInput[]
  }

  export type DuckCreateNestedOneWithoutBetInput = {
    create?: XOR<DuckCreateWithoutBetInput, DuckUncheckedCreateWithoutBetInput>
    connectOrCreate?: DuckCreateOrConnectWithoutBetInput
    connect?: DuckWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutBetsInput = {
    create?: XOR<UserCreateWithoutBetsInput, UserUncheckedCreateWithoutBetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBetsInput
    connect?: UserWhereUniqueInput
  }

  export type RaceCreateNestedOneWithoutBetsInput = {
    create?: XOR<RaceCreateWithoutBetsInput, RaceUncheckedCreateWithoutBetsInput>
    connectOrCreate?: RaceCreateOrConnectWithoutBetsInput
    connect?: RaceWhereUniqueInput
  }

  export type DuckUpdateOneRequiredWithoutBetNestedInput = {
    create?: XOR<DuckCreateWithoutBetInput, DuckUncheckedCreateWithoutBetInput>
    connectOrCreate?: DuckCreateOrConnectWithoutBetInput
    upsert?: DuckUpsertWithoutBetInput
    connect?: DuckWhereUniqueInput
    update?: XOR<XOR<DuckUpdateToOneWithWhereWithoutBetInput, DuckUpdateWithoutBetInput>, DuckUncheckedUpdateWithoutBetInput>
  }

  export type UserUpdateOneRequiredWithoutBetsNestedInput = {
    create?: XOR<UserCreateWithoutBetsInput, UserUncheckedCreateWithoutBetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBetsInput
    upsert?: UserUpsertWithoutBetsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBetsInput, UserUpdateWithoutBetsInput>, UserUncheckedUpdateWithoutBetsInput>
  }

  export type RaceUpdateOneRequiredWithoutBetsNestedInput = {
    create?: XOR<RaceCreateWithoutBetsInput, RaceUncheckedCreateWithoutBetsInput>
    connectOrCreate?: RaceCreateOrConnectWithoutBetsInput
    upsert?: RaceUpsertWithoutBetsInput
    connect?: RaceWhereUniqueInput
    update?: XOR<XOR<RaceUpdateToOneWithWhereWithoutBetsInput, RaceUpdateWithoutBetsInput>, RaceUncheckedUpdateWithoutBetsInput>
  }

  export type RaceCreateresultInput = {
    set: string[]
  }

  export type BetCreateNestedManyWithoutRaceInput = {
    create?: XOR<BetCreateWithoutRaceInput, BetUncheckedCreateWithoutRaceInput> | BetCreateWithoutRaceInput[] | BetUncheckedCreateWithoutRaceInput[]
    connectOrCreate?: BetCreateOrConnectWithoutRaceInput | BetCreateOrConnectWithoutRaceInput[]
    createMany?: BetCreateManyRaceInputEnvelope
    connect?: BetWhereUniqueInput | BetWhereUniqueInput[]
  }

  export type BetUncheckedCreateNestedManyWithoutRaceInput = {
    create?: XOR<BetCreateWithoutRaceInput, BetUncheckedCreateWithoutRaceInput> | BetCreateWithoutRaceInput[] | BetUncheckedCreateWithoutRaceInput[]
    connectOrCreate?: BetCreateOrConnectWithoutRaceInput | BetCreateOrConnectWithoutRaceInput[]
    createMany?: BetCreateManyRaceInputEnvelope
    connect?: BetWhereUniqueInput | BetWhereUniqueInput[]
  }

  export type RaceUpdateresultInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BetUpdateManyWithoutRaceNestedInput = {
    create?: XOR<BetCreateWithoutRaceInput, BetUncheckedCreateWithoutRaceInput> | BetCreateWithoutRaceInput[] | BetUncheckedCreateWithoutRaceInput[]
    connectOrCreate?: BetCreateOrConnectWithoutRaceInput | BetCreateOrConnectWithoutRaceInput[]
    upsert?: BetUpsertWithWhereUniqueWithoutRaceInput | BetUpsertWithWhereUniqueWithoutRaceInput[]
    createMany?: BetCreateManyRaceInputEnvelope
    set?: BetWhereUniqueInput | BetWhereUniqueInput[]
    disconnect?: BetWhereUniqueInput | BetWhereUniqueInput[]
    delete?: BetWhereUniqueInput | BetWhereUniqueInput[]
    connect?: BetWhereUniqueInput | BetWhereUniqueInput[]
    update?: BetUpdateWithWhereUniqueWithoutRaceInput | BetUpdateWithWhereUniqueWithoutRaceInput[]
    updateMany?: BetUpdateManyWithWhereWithoutRaceInput | BetUpdateManyWithWhereWithoutRaceInput[]
    deleteMany?: BetScalarWhereInput | BetScalarWhereInput[]
  }

  export type BetUncheckedUpdateManyWithoutRaceNestedInput = {
    create?: XOR<BetCreateWithoutRaceInput, BetUncheckedCreateWithoutRaceInput> | BetCreateWithoutRaceInput[] | BetUncheckedCreateWithoutRaceInput[]
    connectOrCreate?: BetCreateOrConnectWithoutRaceInput | BetCreateOrConnectWithoutRaceInput[]
    upsert?: BetUpsertWithWhereUniqueWithoutRaceInput | BetUpsertWithWhereUniqueWithoutRaceInput[]
    createMany?: BetCreateManyRaceInputEnvelope
    set?: BetWhereUniqueInput | BetWhereUniqueInput[]
    disconnect?: BetWhereUniqueInput | BetWhereUniqueInput[]
    delete?: BetWhereUniqueInput | BetWhereUniqueInput[]
    connect?: BetWhereUniqueInput | BetWhereUniqueInput[]
    update?: BetUpdateWithWhereUniqueWithoutRaceInput | BetUpdateWithWhereUniqueWithoutRaceInput[]
    updateMany?: BetUpdateManyWithWhereWithoutRaceInput | BetUpdateManyWithWhereWithoutRaceInput[]
    deleteMany?: BetScalarWhereInput | BetScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutDuckInput = {
    create?: XOR<UserCreateWithoutDuckInput, UserUncheckedCreateWithoutDuckInput>
    connectOrCreate?: UserCreateOrConnectWithoutDuckInput
    connect?: UserWhereUniqueInput
  }

  export type BetCreateNestedManyWithoutDuckInput = {
    create?: XOR<BetCreateWithoutDuckInput, BetUncheckedCreateWithoutDuckInput> | BetCreateWithoutDuckInput[] | BetUncheckedCreateWithoutDuckInput[]
    connectOrCreate?: BetCreateOrConnectWithoutDuckInput | BetCreateOrConnectWithoutDuckInput[]
    createMany?: BetCreateManyDuckInputEnvelope
    connect?: BetWhereUniqueInput | BetWhereUniqueInput[]
  }

  export type AuctionCreateNestedManyWithoutDuckInput = {
    create?: XOR<AuctionCreateWithoutDuckInput, AuctionUncheckedCreateWithoutDuckInput> | AuctionCreateWithoutDuckInput[] | AuctionUncheckedCreateWithoutDuckInput[]
    connectOrCreate?: AuctionCreateOrConnectWithoutDuckInput | AuctionCreateOrConnectWithoutDuckInput[]
    createMany?: AuctionCreateManyDuckInputEnvelope
    connect?: AuctionWhereUniqueInput | AuctionWhereUniqueInput[]
  }

  export type BetUncheckedCreateNestedManyWithoutDuckInput = {
    create?: XOR<BetCreateWithoutDuckInput, BetUncheckedCreateWithoutDuckInput> | BetCreateWithoutDuckInput[] | BetUncheckedCreateWithoutDuckInput[]
    connectOrCreate?: BetCreateOrConnectWithoutDuckInput | BetCreateOrConnectWithoutDuckInput[]
    createMany?: BetCreateManyDuckInputEnvelope
    connect?: BetWhereUniqueInput | BetWhereUniqueInput[]
  }

  export type AuctionUncheckedCreateNestedManyWithoutDuckInput = {
    create?: XOR<AuctionCreateWithoutDuckInput, AuctionUncheckedCreateWithoutDuckInput> | AuctionCreateWithoutDuckInput[] | AuctionUncheckedCreateWithoutDuckInput[]
    connectOrCreate?: AuctionCreateOrConnectWithoutDuckInput | AuctionCreateOrConnectWithoutDuckInput[]
    createMany?: AuctionCreateManyDuckInputEnvelope
    connect?: AuctionWhereUniqueInput | AuctionWhereUniqueInput[]
  }

  export type UserUpdateOneWithoutDuckNestedInput = {
    create?: XOR<UserCreateWithoutDuckInput, UserUncheckedCreateWithoutDuckInput>
    connectOrCreate?: UserCreateOrConnectWithoutDuckInput
    upsert?: UserUpsertWithoutDuckInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDuckInput, UserUpdateWithoutDuckInput>, UserUncheckedUpdateWithoutDuckInput>
  }

  export type BetUpdateManyWithoutDuckNestedInput = {
    create?: XOR<BetCreateWithoutDuckInput, BetUncheckedCreateWithoutDuckInput> | BetCreateWithoutDuckInput[] | BetUncheckedCreateWithoutDuckInput[]
    connectOrCreate?: BetCreateOrConnectWithoutDuckInput | BetCreateOrConnectWithoutDuckInput[]
    upsert?: BetUpsertWithWhereUniqueWithoutDuckInput | BetUpsertWithWhereUniqueWithoutDuckInput[]
    createMany?: BetCreateManyDuckInputEnvelope
    set?: BetWhereUniqueInput | BetWhereUniqueInput[]
    disconnect?: BetWhereUniqueInput | BetWhereUniqueInput[]
    delete?: BetWhereUniqueInput | BetWhereUniqueInput[]
    connect?: BetWhereUniqueInput | BetWhereUniqueInput[]
    update?: BetUpdateWithWhereUniqueWithoutDuckInput | BetUpdateWithWhereUniqueWithoutDuckInput[]
    updateMany?: BetUpdateManyWithWhereWithoutDuckInput | BetUpdateManyWithWhereWithoutDuckInput[]
    deleteMany?: BetScalarWhereInput | BetScalarWhereInput[]
  }

  export type AuctionUpdateManyWithoutDuckNestedInput = {
    create?: XOR<AuctionCreateWithoutDuckInput, AuctionUncheckedCreateWithoutDuckInput> | AuctionCreateWithoutDuckInput[] | AuctionUncheckedCreateWithoutDuckInput[]
    connectOrCreate?: AuctionCreateOrConnectWithoutDuckInput | AuctionCreateOrConnectWithoutDuckInput[]
    upsert?: AuctionUpsertWithWhereUniqueWithoutDuckInput | AuctionUpsertWithWhereUniqueWithoutDuckInput[]
    createMany?: AuctionCreateManyDuckInputEnvelope
    set?: AuctionWhereUniqueInput | AuctionWhereUniqueInput[]
    disconnect?: AuctionWhereUniqueInput | AuctionWhereUniqueInput[]
    delete?: AuctionWhereUniqueInput | AuctionWhereUniqueInput[]
    connect?: AuctionWhereUniqueInput | AuctionWhereUniqueInput[]
    update?: AuctionUpdateWithWhereUniqueWithoutDuckInput | AuctionUpdateWithWhereUniqueWithoutDuckInput[]
    updateMany?: AuctionUpdateManyWithWhereWithoutDuckInput | AuctionUpdateManyWithWhereWithoutDuckInput[]
    deleteMany?: AuctionScalarWhereInput | AuctionScalarWhereInput[]
  }

  export type BetUncheckedUpdateManyWithoutDuckNestedInput = {
    create?: XOR<BetCreateWithoutDuckInput, BetUncheckedCreateWithoutDuckInput> | BetCreateWithoutDuckInput[] | BetUncheckedCreateWithoutDuckInput[]
    connectOrCreate?: BetCreateOrConnectWithoutDuckInput | BetCreateOrConnectWithoutDuckInput[]
    upsert?: BetUpsertWithWhereUniqueWithoutDuckInput | BetUpsertWithWhereUniqueWithoutDuckInput[]
    createMany?: BetCreateManyDuckInputEnvelope
    set?: BetWhereUniqueInput | BetWhereUniqueInput[]
    disconnect?: BetWhereUniqueInput | BetWhereUniqueInput[]
    delete?: BetWhereUniqueInput | BetWhereUniqueInput[]
    connect?: BetWhereUniqueInput | BetWhereUniqueInput[]
    update?: BetUpdateWithWhereUniqueWithoutDuckInput | BetUpdateWithWhereUniqueWithoutDuckInput[]
    updateMany?: BetUpdateManyWithWhereWithoutDuckInput | BetUpdateManyWithWhereWithoutDuckInput[]
    deleteMany?: BetScalarWhereInput | BetScalarWhereInput[]
  }

  export type AuctionUncheckedUpdateManyWithoutDuckNestedInput = {
    create?: XOR<AuctionCreateWithoutDuckInput, AuctionUncheckedCreateWithoutDuckInput> | AuctionCreateWithoutDuckInput[] | AuctionUncheckedCreateWithoutDuckInput[]
    connectOrCreate?: AuctionCreateOrConnectWithoutDuckInput | AuctionCreateOrConnectWithoutDuckInput[]
    upsert?: AuctionUpsertWithWhereUniqueWithoutDuckInput | AuctionUpsertWithWhereUniqueWithoutDuckInput[]
    createMany?: AuctionCreateManyDuckInputEnvelope
    set?: AuctionWhereUniqueInput | AuctionWhereUniqueInput[]
    disconnect?: AuctionWhereUniqueInput | AuctionWhereUniqueInput[]
    delete?: AuctionWhereUniqueInput | AuctionWhereUniqueInput[]
    connect?: AuctionWhereUniqueInput | AuctionWhereUniqueInput[]
    update?: AuctionUpdateWithWhereUniqueWithoutDuckInput | AuctionUpdateWithWhereUniqueWithoutDuckInput[]
    updateMany?: AuctionUpdateManyWithWhereWithoutDuckInput | AuctionUpdateManyWithWhereWithoutDuckInput[]
    deleteMany?: AuctionScalarWhereInput | AuctionScalarWhereInput[]
  }

  export type DuckCreateNestedOneWithoutAuctionInput = {
    create?: XOR<DuckCreateWithoutAuctionInput, DuckUncheckedCreateWithoutAuctionInput>
    connectOrCreate?: DuckCreateOrConnectWithoutAuctionInput
    connect?: DuckWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAuctionInput = {
    create?: XOR<UserCreateWithoutAuctionInput, UserUncheckedCreateWithoutAuctionInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuctionInput
    connect?: UserWhereUniqueInput
  }

  export type DuckUpdateOneRequiredWithoutAuctionNestedInput = {
    create?: XOR<DuckCreateWithoutAuctionInput, DuckUncheckedCreateWithoutAuctionInput>
    connectOrCreate?: DuckCreateOrConnectWithoutAuctionInput
    upsert?: DuckUpsertWithoutAuctionInput
    connect?: DuckWhereUniqueInput
    update?: XOR<XOR<DuckUpdateToOneWithWhereWithoutAuctionInput, DuckUpdateWithoutAuctionInput>, DuckUncheckedUpdateWithoutAuctionInput>
  }

  export type UserUpdateOneWithoutAuctionNestedInput = {
    create?: XOR<UserCreateWithoutAuctionInput, UserUncheckedCreateWithoutAuctionInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuctionInput
    upsert?: UserUpsertWithoutAuctionInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAuctionInput, UserUpdateWithoutAuctionInput>, UserUncheckedUpdateWithoutAuctionInput>
  }

  export type UserCreateNestedOneWithoutDepositInput = {
    create?: XOR<UserCreateWithoutDepositInput, UserUncheckedCreateWithoutDepositInput>
    connectOrCreate?: UserCreateOrConnectWithoutDepositInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutDepositNestedInput = {
    create?: XOR<UserCreateWithoutDepositInput, UserUncheckedCreateWithoutDepositInput>
    connectOrCreate?: UserCreateOrConnectWithoutDepositInput
    upsert?: UserUpsertWithoutDepositInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDepositInput, UserUpdateWithoutDepositInput>, UserUncheckedUpdateWithoutDepositInput>
  }

  export type UserCreateNestedOneWithoutBonusInput = {
    create?: XOR<UserCreateWithoutBonusInput, UserUncheckedCreateWithoutBonusInput>
    connectOrCreate?: UserCreateOrConnectWithoutBonusInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutBonusNestedInput = {
    create?: XOR<UserCreateWithoutBonusInput, UserUncheckedCreateWithoutBonusInput>
    connectOrCreate?: UserCreateOrConnectWithoutBonusInput
    upsert?: UserUpsertWithoutBonusInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBonusInput, UserUpdateWithoutBonusInput>, UserUncheckedUpdateWithoutBonusInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BetCreateWithoutUserInput = {
    id?: string
    betType: string
    amount: number
    createdAt?: Date | string
    duck: DuckCreateNestedOneWithoutBetInput
    Race: RaceCreateNestedOneWithoutBetsInput
  }

  export type BetUncheckedCreateWithoutUserInput = {
    id?: string
    betType: string
    amount: number
    createdAt?: Date | string
    duckId: string
    raceId: string
  }

  export type BetCreateOrConnectWithoutUserInput = {
    where: BetWhereUniqueInput
    create: XOR<BetCreateWithoutUserInput, BetUncheckedCreateWithoutUserInput>
  }

  export type BetCreateManyUserInputEnvelope = {
    data: BetCreateManyUserInput | BetCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AuctionCreateWithoutUserInput = {
    id?: string
    amount?: number
    newName: string
    expiredAt: Date | string
    createdAt?: Date | string
    duck: DuckCreateNestedOneWithoutAuctionInput
  }

  export type AuctionUncheckedCreateWithoutUserInput = {
    id?: string
    duckId: string
    amount?: number
    newName: string
    expiredAt: Date | string
    createdAt?: Date | string
  }

  export type AuctionCreateOrConnectWithoutUserInput = {
    where: AuctionWhereUniqueInput
    create: XOR<AuctionCreateWithoutUserInput, AuctionUncheckedCreateWithoutUserInput>
  }

  export type AuctionCreateManyUserInputEnvelope = {
    data: AuctionCreateManyUserInput | AuctionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DuckCreateWithoutSponsoredByInput = {
    id?: string
    name: string
    color: string
    createdAt?: Date | string
    Bet?: BetCreateNestedManyWithoutDuckInput
    Auction?: AuctionCreateNestedManyWithoutDuckInput
  }

  export type DuckUncheckedCreateWithoutSponsoredByInput = {
    id?: string
    name: string
    color: string
    createdAt?: Date | string
    Bet?: BetUncheckedCreateNestedManyWithoutDuckInput
    Auction?: AuctionUncheckedCreateNestedManyWithoutDuckInput
  }

  export type DuckCreateOrConnectWithoutSponsoredByInput = {
    where: DuckWhereUniqueInput
    create: XOR<DuckCreateWithoutSponsoredByInput, DuckUncheckedCreateWithoutSponsoredByInput>
  }

  export type DuckCreateManySponsoredByInputEnvelope = {
    data: DuckCreateManySponsoredByInput | DuckCreateManySponsoredByInput[]
    skipDuplicates?: boolean
  }

  export type DepositCreateWithoutUserInput = {
    id?: string
    amount: number
    createdAt?: Date | string
  }

  export type DepositUncheckedCreateWithoutUserInput = {
    id?: string
    amount: number
    createdAt?: Date | string
  }

  export type DepositCreateOrConnectWithoutUserInput = {
    where: DepositWhereUniqueInput
    create: XOR<DepositCreateWithoutUserInput, DepositUncheckedCreateWithoutUserInput>
  }

  export type DepositCreateManyUserInputEnvelope = {
    data: DepositCreateManyUserInput | DepositCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BonusCreateWithoutUserInput = {
    id?: string
    amount: number
    createdAt?: Date | string
  }

  export type BonusUncheckedCreateWithoutUserInput = {
    id?: string
    amount: number
    createdAt?: Date | string
  }

  export type BonusCreateOrConnectWithoutUserInput = {
    where: BonusWhereUniqueInput
    create: XOR<BonusCreateWithoutUserInput, BonusUncheckedCreateWithoutUserInput>
  }

  export type BonusCreateManyUserInputEnvelope = {
    data: BonusCreateManyUserInput | BonusCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BetUpsertWithWhereUniqueWithoutUserInput = {
    where: BetWhereUniqueInput
    update: XOR<BetUpdateWithoutUserInput, BetUncheckedUpdateWithoutUserInput>
    create: XOR<BetCreateWithoutUserInput, BetUncheckedCreateWithoutUserInput>
  }

  export type BetUpdateWithWhereUniqueWithoutUserInput = {
    where: BetWhereUniqueInput
    data: XOR<BetUpdateWithoutUserInput, BetUncheckedUpdateWithoutUserInput>
  }

  export type BetUpdateManyWithWhereWithoutUserInput = {
    where: BetScalarWhereInput
    data: XOR<BetUpdateManyMutationInput, BetUncheckedUpdateManyWithoutUserInput>
  }

  export type BetScalarWhereInput = {
    AND?: BetScalarWhereInput | BetScalarWhereInput[]
    OR?: BetScalarWhereInput[]
    NOT?: BetScalarWhereInput | BetScalarWhereInput[]
    id?: StringFilter<"Bet"> | string
    betType?: StringFilter<"Bet"> | string
    amount?: FloatFilter<"Bet"> | number
    createdAt?: DateTimeFilter<"Bet"> | Date | string
    duckId?: StringFilter<"Bet"> | string
    userId?: StringFilter<"Bet"> | string
    raceId?: StringFilter<"Bet"> | string
  }

  export type AuctionUpsertWithWhereUniqueWithoutUserInput = {
    where: AuctionWhereUniqueInput
    update: XOR<AuctionUpdateWithoutUserInput, AuctionUncheckedUpdateWithoutUserInput>
    create: XOR<AuctionCreateWithoutUserInput, AuctionUncheckedCreateWithoutUserInput>
  }

  export type AuctionUpdateWithWhereUniqueWithoutUserInput = {
    where: AuctionWhereUniqueInput
    data: XOR<AuctionUpdateWithoutUserInput, AuctionUncheckedUpdateWithoutUserInput>
  }

  export type AuctionUpdateManyWithWhereWithoutUserInput = {
    where: AuctionScalarWhereInput
    data: XOR<AuctionUpdateManyMutationInput, AuctionUncheckedUpdateManyWithoutUserInput>
  }

  export type AuctionScalarWhereInput = {
    AND?: AuctionScalarWhereInput | AuctionScalarWhereInput[]
    OR?: AuctionScalarWhereInput[]
    NOT?: AuctionScalarWhereInput | AuctionScalarWhereInput[]
    id?: StringFilter<"Auction"> | string
    userId?: StringNullableFilter<"Auction"> | string | null
    duckId?: StringFilter<"Auction"> | string
    amount?: FloatFilter<"Auction"> | number
    newName?: StringFilter<"Auction"> | string
    expiredAt?: DateTimeFilter<"Auction"> | Date | string
    createdAt?: DateTimeFilter<"Auction"> | Date | string
  }

  export type DuckUpsertWithWhereUniqueWithoutSponsoredByInput = {
    where: DuckWhereUniqueInput
    update: XOR<DuckUpdateWithoutSponsoredByInput, DuckUncheckedUpdateWithoutSponsoredByInput>
    create: XOR<DuckCreateWithoutSponsoredByInput, DuckUncheckedCreateWithoutSponsoredByInput>
  }

  export type DuckUpdateWithWhereUniqueWithoutSponsoredByInput = {
    where: DuckWhereUniqueInput
    data: XOR<DuckUpdateWithoutSponsoredByInput, DuckUncheckedUpdateWithoutSponsoredByInput>
  }

  export type DuckUpdateManyWithWhereWithoutSponsoredByInput = {
    where: DuckScalarWhereInput
    data: XOR<DuckUpdateManyMutationInput, DuckUncheckedUpdateManyWithoutSponsoredByInput>
  }

  export type DuckScalarWhereInput = {
    AND?: DuckScalarWhereInput | DuckScalarWhereInput[]
    OR?: DuckScalarWhereInput[]
    NOT?: DuckScalarWhereInput | DuckScalarWhereInput[]
    id?: StringFilter<"Duck"> | string
    name?: StringFilter<"Duck"> | string
    color?: StringFilter<"Duck"> | string
    userId?: StringNullableFilter<"Duck"> | string | null
    createdAt?: DateTimeFilter<"Duck"> | Date | string
  }

  export type DepositUpsertWithWhereUniqueWithoutUserInput = {
    where: DepositWhereUniqueInput
    update: XOR<DepositUpdateWithoutUserInput, DepositUncheckedUpdateWithoutUserInput>
    create: XOR<DepositCreateWithoutUserInput, DepositUncheckedCreateWithoutUserInput>
  }

  export type DepositUpdateWithWhereUniqueWithoutUserInput = {
    where: DepositWhereUniqueInput
    data: XOR<DepositUpdateWithoutUserInput, DepositUncheckedUpdateWithoutUserInput>
  }

  export type DepositUpdateManyWithWhereWithoutUserInput = {
    where: DepositScalarWhereInput
    data: XOR<DepositUpdateManyMutationInput, DepositUncheckedUpdateManyWithoutUserInput>
  }

  export type DepositScalarWhereInput = {
    AND?: DepositScalarWhereInput | DepositScalarWhereInput[]
    OR?: DepositScalarWhereInput[]
    NOT?: DepositScalarWhereInput | DepositScalarWhereInput[]
    id?: StringFilter<"Deposit"> | string
    userId?: StringFilter<"Deposit"> | string
    amount?: FloatFilter<"Deposit"> | number
    createdAt?: DateTimeFilter<"Deposit"> | Date | string
  }

  export type BonusUpsertWithWhereUniqueWithoutUserInput = {
    where: BonusWhereUniqueInput
    update: XOR<BonusUpdateWithoutUserInput, BonusUncheckedUpdateWithoutUserInput>
    create: XOR<BonusCreateWithoutUserInput, BonusUncheckedCreateWithoutUserInput>
  }

  export type BonusUpdateWithWhereUniqueWithoutUserInput = {
    where: BonusWhereUniqueInput
    data: XOR<BonusUpdateWithoutUserInput, BonusUncheckedUpdateWithoutUserInput>
  }

  export type BonusUpdateManyWithWhereWithoutUserInput = {
    where: BonusScalarWhereInput
    data: XOR<BonusUpdateManyMutationInput, BonusUncheckedUpdateManyWithoutUserInput>
  }

  export type BonusScalarWhereInput = {
    AND?: BonusScalarWhereInput | BonusScalarWhereInput[]
    OR?: BonusScalarWhereInput[]
    NOT?: BonusScalarWhereInput | BonusScalarWhereInput[]
    id?: StringFilter<"Bonus"> | string
    userId?: StringFilter<"Bonus"> | string
    amount?: FloatFilter<"Bonus"> | number
    createdAt?: DateTimeFilter<"Bonus"> | Date | string
  }

  export type DuckCreateWithoutBetInput = {
    id?: string
    name: string
    color: string
    createdAt?: Date | string
    sponsoredBy?: UserCreateNestedOneWithoutDuckInput
    Auction?: AuctionCreateNestedManyWithoutDuckInput
  }

  export type DuckUncheckedCreateWithoutBetInput = {
    id?: string
    name: string
    color: string
    userId?: string | null
    createdAt?: Date | string
    Auction?: AuctionUncheckedCreateNestedManyWithoutDuckInput
  }

  export type DuckCreateOrConnectWithoutBetInput = {
    where: DuckWhereUniqueInput
    create: XOR<DuckCreateWithoutBetInput, DuckUncheckedCreateWithoutBetInput>
  }

  export type UserCreateWithoutBetsInput = {
    id?: string
    wallet: string
    referralCode: string
    referredBy?: string | null
    balance?: number
    createdAt?: Date | string
    Auction?: AuctionCreateNestedManyWithoutUserInput
    Duck?: DuckCreateNestedManyWithoutSponsoredByInput
    Deposit?: DepositCreateNestedManyWithoutUserInput
    Bonus?: BonusCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBetsInput = {
    id?: string
    wallet: string
    referralCode: string
    referredBy?: string | null
    balance?: number
    createdAt?: Date | string
    Auction?: AuctionUncheckedCreateNestedManyWithoutUserInput
    Duck?: DuckUncheckedCreateNestedManyWithoutSponsoredByInput
    Deposit?: DepositUncheckedCreateNestedManyWithoutUserInput
    Bonus?: BonusUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBetsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBetsInput, UserUncheckedCreateWithoutBetsInput>
  }

  export type RaceCreateWithoutBetsInput = {
    id?: string
    status: string
    liveStream: string
    result?: RaceCreateresultInput | string[]
    totalWin: number
    totalPlace: number
    totalShow: number
    expiredAt: Date | string
    createdAt?: Date | string
  }

  export type RaceUncheckedCreateWithoutBetsInput = {
    id?: string
    status: string
    liveStream: string
    result?: RaceCreateresultInput | string[]
    totalWin: number
    totalPlace: number
    totalShow: number
    expiredAt: Date | string
    createdAt?: Date | string
  }

  export type RaceCreateOrConnectWithoutBetsInput = {
    where: RaceWhereUniqueInput
    create: XOR<RaceCreateWithoutBetsInput, RaceUncheckedCreateWithoutBetsInput>
  }

  export type DuckUpsertWithoutBetInput = {
    update: XOR<DuckUpdateWithoutBetInput, DuckUncheckedUpdateWithoutBetInput>
    create: XOR<DuckCreateWithoutBetInput, DuckUncheckedCreateWithoutBetInput>
    where?: DuckWhereInput
  }

  export type DuckUpdateToOneWithWhereWithoutBetInput = {
    where?: DuckWhereInput
    data: XOR<DuckUpdateWithoutBetInput, DuckUncheckedUpdateWithoutBetInput>
  }

  export type DuckUpdateWithoutBetInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sponsoredBy?: UserUpdateOneWithoutDuckNestedInput
    Auction?: AuctionUpdateManyWithoutDuckNestedInput
  }

  export type DuckUncheckedUpdateWithoutBetInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Auction?: AuctionUncheckedUpdateManyWithoutDuckNestedInput
  }

  export type UserUpsertWithoutBetsInput = {
    update: XOR<UserUpdateWithoutBetsInput, UserUncheckedUpdateWithoutBetsInput>
    create: XOR<UserCreateWithoutBetsInput, UserUncheckedCreateWithoutBetsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBetsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBetsInput, UserUncheckedUpdateWithoutBetsInput>
  }

  export type UserUpdateWithoutBetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    wallet?: StringFieldUpdateOperationsInput | string
    referralCode?: StringFieldUpdateOperationsInput | string
    referredBy?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Auction?: AuctionUpdateManyWithoutUserNestedInput
    Duck?: DuckUpdateManyWithoutSponsoredByNestedInput
    Deposit?: DepositUpdateManyWithoutUserNestedInput
    Bonus?: BonusUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    wallet?: StringFieldUpdateOperationsInput | string
    referralCode?: StringFieldUpdateOperationsInput | string
    referredBy?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Auction?: AuctionUncheckedUpdateManyWithoutUserNestedInput
    Duck?: DuckUncheckedUpdateManyWithoutSponsoredByNestedInput
    Deposit?: DepositUncheckedUpdateManyWithoutUserNestedInput
    Bonus?: BonusUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RaceUpsertWithoutBetsInput = {
    update: XOR<RaceUpdateWithoutBetsInput, RaceUncheckedUpdateWithoutBetsInput>
    create: XOR<RaceCreateWithoutBetsInput, RaceUncheckedCreateWithoutBetsInput>
    where?: RaceWhereInput
  }

  export type RaceUpdateToOneWithWhereWithoutBetsInput = {
    where?: RaceWhereInput
    data: XOR<RaceUpdateWithoutBetsInput, RaceUncheckedUpdateWithoutBetsInput>
  }

  export type RaceUpdateWithoutBetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    liveStream?: StringFieldUpdateOperationsInput | string
    result?: RaceUpdateresultInput | string[]
    totalWin?: FloatFieldUpdateOperationsInput | number
    totalPlace?: FloatFieldUpdateOperationsInput | number
    totalShow?: FloatFieldUpdateOperationsInput | number
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RaceUncheckedUpdateWithoutBetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    liveStream?: StringFieldUpdateOperationsInput | string
    result?: RaceUpdateresultInput | string[]
    totalWin?: FloatFieldUpdateOperationsInput | number
    totalPlace?: FloatFieldUpdateOperationsInput | number
    totalShow?: FloatFieldUpdateOperationsInput | number
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BetCreateWithoutRaceInput = {
    id?: string
    betType: string
    amount: number
    createdAt?: Date | string
    duck: DuckCreateNestedOneWithoutBetInput
    user: UserCreateNestedOneWithoutBetsInput
  }

  export type BetUncheckedCreateWithoutRaceInput = {
    id?: string
    betType: string
    amount: number
    createdAt?: Date | string
    duckId: string
    userId: string
  }

  export type BetCreateOrConnectWithoutRaceInput = {
    where: BetWhereUniqueInput
    create: XOR<BetCreateWithoutRaceInput, BetUncheckedCreateWithoutRaceInput>
  }

  export type BetCreateManyRaceInputEnvelope = {
    data: BetCreateManyRaceInput | BetCreateManyRaceInput[]
    skipDuplicates?: boolean
  }

  export type BetUpsertWithWhereUniqueWithoutRaceInput = {
    where: BetWhereUniqueInput
    update: XOR<BetUpdateWithoutRaceInput, BetUncheckedUpdateWithoutRaceInput>
    create: XOR<BetCreateWithoutRaceInput, BetUncheckedCreateWithoutRaceInput>
  }

  export type BetUpdateWithWhereUniqueWithoutRaceInput = {
    where: BetWhereUniqueInput
    data: XOR<BetUpdateWithoutRaceInput, BetUncheckedUpdateWithoutRaceInput>
  }

  export type BetUpdateManyWithWhereWithoutRaceInput = {
    where: BetScalarWhereInput
    data: XOR<BetUpdateManyMutationInput, BetUncheckedUpdateManyWithoutRaceInput>
  }

  export type UserCreateWithoutDuckInput = {
    id?: string
    wallet: string
    referralCode: string
    referredBy?: string | null
    balance?: number
    createdAt?: Date | string
    Bets?: BetCreateNestedManyWithoutUserInput
    Auction?: AuctionCreateNestedManyWithoutUserInput
    Deposit?: DepositCreateNestedManyWithoutUserInput
    Bonus?: BonusCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDuckInput = {
    id?: string
    wallet: string
    referralCode: string
    referredBy?: string | null
    balance?: number
    createdAt?: Date | string
    Bets?: BetUncheckedCreateNestedManyWithoutUserInput
    Auction?: AuctionUncheckedCreateNestedManyWithoutUserInput
    Deposit?: DepositUncheckedCreateNestedManyWithoutUserInput
    Bonus?: BonusUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDuckInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDuckInput, UserUncheckedCreateWithoutDuckInput>
  }

  export type BetCreateWithoutDuckInput = {
    id?: string
    betType: string
    amount: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutBetsInput
    Race: RaceCreateNestedOneWithoutBetsInput
  }

  export type BetUncheckedCreateWithoutDuckInput = {
    id?: string
    betType: string
    amount: number
    createdAt?: Date | string
    userId: string
    raceId: string
  }

  export type BetCreateOrConnectWithoutDuckInput = {
    where: BetWhereUniqueInput
    create: XOR<BetCreateWithoutDuckInput, BetUncheckedCreateWithoutDuckInput>
  }

  export type BetCreateManyDuckInputEnvelope = {
    data: BetCreateManyDuckInput | BetCreateManyDuckInput[]
    skipDuplicates?: boolean
  }

  export type AuctionCreateWithoutDuckInput = {
    id?: string
    amount?: number
    newName: string
    expiredAt: Date | string
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutAuctionInput
  }

  export type AuctionUncheckedCreateWithoutDuckInput = {
    id?: string
    userId?: string | null
    amount?: number
    newName: string
    expiredAt: Date | string
    createdAt?: Date | string
  }

  export type AuctionCreateOrConnectWithoutDuckInput = {
    where: AuctionWhereUniqueInput
    create: XOR<AuctionCreateWithoutDuckInput, AuctionUncheckedCreateWithoutDuckInput>
  }

  export type AuctionCreateManyDuckInputEnvelope = {
    data: AuctionCreateManyDuckInput | AuctionCreateManyDuckInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutDuckInput = {
    update: XOR<UserUpdateWithoutDuckInput, UserUncheckedUpdateWithoutDuckInput>
    create: XOR<UserCreateWithoutDuckInput, UserUncheckedCreateWithoutDuckInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDuckInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDuckInput, UserUncheckedUpdateWithoutDuckInput>
  }

  export type UserUpdateWithoutDuckInput = {
    id?: StringFieldUpdateOperationsInput | string
    wallet?: StringFieldUpdateOperationsInput | string
    referralCode?: StringFieldUpdateOperationsInput | string
    referredBy?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Bets?: BetUpdateManyWithoutUserNestedInput
    Auction?: AuctionUpdateManyWithoutUserNestedInput
    Deposit?: DepositUpdateManyWithoutUserNestedInput
    Bonus?: BonusUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDuckInput = {
    id?: StringFieldUpdateOperationsInput | string
    wallet?: StringFieldUpdateOperationsInput | string
    referralCode?: StringFieldUpdateOperationsInput | string
    referredBy?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Bets?: BetUncheckedUpdateManyWithoutUserNestedInput
    Auction?: AuctionUncheckedUpdateManyWithoutUserNestedInput
    Deposit?: DepositUncheckedUpdateManyWithoutUserNestedInput
    Bonus?: BonusUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BetUpsertWithWhereUniqueWithoutDuckInput = {
    where: BetWhereUniqueInput
    update: XOR<BetUpdateWithoutDuckInput, BetUncheckedUpdateWithoutDuckInput>
    create: XOR<BetCreateWithoutDuckInput, BetUncheckedCreateWithoutDuckInput>
  }

  export type BetUpdateWithWhereUniqueWithoutDuckInput = {
    where: BetWhereUniqueInput
    data: XOR<BetUpdateWithoutDuckInput, BetUncheckedUpdateWithoutDuckInput>
  }

  export type BetUpdateManyWithWhereWithoutDuckInput = {
    where: BetScalarWhereInput
    data: XOR<BetUpdateManyMutationInput, BetUncheckedUpdateManyWithoutDuckInput>
  }

  export type AuctionUpsertWithWhereUniqueWithoutDuckInput = {
    where: AuctionWhereUniqueInput
    update: XOR<AuctionUpdateWithoutDuckInput, AuctionUncheckedUpdateWithoutDuckInput>
    create: XOR<AuctionCreateWithoutDuckInput, AuctionUncheckedCreateWithoutDuckInput>
  }

  export type AuctionUpdateWithWhereUniqueWithoutDuckInput = {
    where: AuctionWhereUniqueInput
    data: XOR<AuctionUpdateWithoutDuckInput, AuctionUncheckedUpdateWithoutDuckInput>
  }

  export type AuctionUpdateManyWithWhereWithoutDuckInput = {
    where: AuctionScalarWhereInput
    data: XOR<AuctionUpdateManyMutationInput, AuctionUncheckedUpdateManyWithoutDuckInput>
  }

  export type DuckCreateWithoutAuctionInput = {
    id?: string
    name: string
    color: string
    createdAt?: Date | string
    sponsoredBy?: UserCreateNestedOneWithoutDuckInput
    Bet?: BetCreateNestedManyWithoutDuckInput
  }

  export type DuckUncheckedCreateWithoutAuctionInput = {
    id?: string
    name: string
    color: string
    userId?: string | null
    createdAt?: Date | string
    Bet?: BetUncheckedCreateNestedManyWithoutDuckInput
  }

  export type DuckCreateOrConnectWithoutAuctionInput = {
    where: DuckWhereUniqueInput
    create: XOR<DuckCreateWithoutAuctionInput, DuckUncheckedCreateWithoutAuctionInput>
  }

  export type UserCreateWithoutAuctionInput = {
    id?: string
    wallet: string
    referralCode: string
    referredBy?: string | null
    balance?: number
    createdAt?: Date | string
    Bets?: BetCreateNestedManyWithoutUserInput
    Duck?: DuckCreateNestedManyWithoutSponsoredByInput
    Deposit?: DepositCreateNestedManyWithoutUserInput
    Bonus?: BonusCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAuctionInput = {
    id?: string
    wallet: string
    referralCode: string
    referredBy?: string | null
    balance?: number
    createdAt?: Date | string
    Bets?: BetUncheckedCreateNestedManyWithoutUserInput
    Duck?: DuckUncheckedCreateNestedManyWithoutSponsoredByInput
    Deposit?: DepositUncheckedCreateNestedManyWithoutUserInput
    Bonus?: BonusUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAuctionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAuctionInput, UserUncheckedCreateWithoutAuctionInput>
  }

  export type DuckUpsertWithoutAuctionInput = {
    update: XOR<DuckUpdateWithoutAuctionInput, DuckUncheckedUpdateWithoutAuctionInput>
    create: XOR<DuckCreateWithoutAuctionInput, DuckUncheckedCreateWithoutAuctionInput>
    where?: DuckWhereInput
  }

  export type DuckUpdateToOneWithWhereWithoutAuctionInput = {
    where?: DuckWhereInput
    data: XOR<DuckUpdateWithoutAuctionInput, DuckUncheckedUpdateWithoutAuctionInput>
  }

  export type DuckUpdateWithoutAuctionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sponsoredBy?: UserUpdateOneWithoutDuckNestedInput
    Bet?: BetUpdateManyWithoutDuckNestedInput
  }

  export type DuckUncheckedUpdateWithoutAuctionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Bet?: BetUncheckedUpdateManyWithoutDuckNestedInput
  }

  export type UserUpsertWithoutAuctionInput = {
    update: XOR<UserUpdateWithoutAuctionInput, UserUncheckedUpdateWithoutAuctionInput>
    create: XOR<UserCreateWithoutAuctionInput, UserUncheckedCreateWithoutAuctionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAuctionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAuctionInput, UserUncheckedUpdateWithoutAuctionInput>
  }

  export type UserUpdateWithoutAuctionInput = {
    id?: StringFieldUpdateOperationsInput | string
    wallet?: StringFieldUpdateOperationsInput | string
    referralCode?: StringFieldUpdateOperationsInput | string
    referredBy?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Bets?: BetUpdateManyWithoutUserNestedInput
    Duck?: DuckUpdateManyWithoutSponsoredByNestedInput
    Deposit?: DepositUpdateManyWithoutUserNestedInput
    Bonus?: BonusUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAuctionInput = {
    id?: StringFieldUpdateOperationsInput | string
    wallet?: StringFieldUpdateOperationsInput | string
    referralCode?: StringFieldUpdateOperationsInput | string
    referredBy?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Bets?: BetUncheckedUpdateManyWithoutUserNestedInput
    Duck?: DuckUncheckedUpdateManyWithoutSponsoredByNestedInput
    Deposit?: DepositUncheckedUpdateManyWithoutUserNestedInput
    Bonus?: BonusUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutDepositInput = {
    id?: string
    wallet: string
    referralCode: string
    referredBy?: string | null
    balance?: number
    createdAt?: Date | string
    Bets?: BetCreateNestedManyWithoutUserInput
    Auction?: AuctionCreateNestedManyWithoutUserInput
    Duck?: DuckCreateNestedManyWithoutSponsoredByInput
    Bonus?: BonusCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDepositInput = {
    id?: string
    wallet: string
    referralCode: string
    referredBy?: string | null
    balance?: number
    createdAt?: Date | string
    Bets?: BetUncheckedCreateNestedManyWithoutUserInput
    Auction?: AuctionUncheckedCreateNestedManyWithoutUserInput
    Duck?: DuckUncheckedCreateNestedManyWithoutSponsoredByInput
    Bonus?: BonusUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDepositInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDepositInput, UserUncheckedCreateWithoutDepositInput>
  }

  export type UserUpsertWithoutDepositInput = {
    update: XOR<UserUpdateWithoutDepositInput, UserUncheckedUpdateWithoutDepositInput>
    create: XOR<UserCreateWithoutDepositInput, UserUncheckedCreateWithoutDepositInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDepositInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDepositInput, UserUncheckedUpdateWithoutDepositInput>
  }

  export type UserUpdateWithoutDepositInput = {
    id?: StringFieldUpdateOperationsInput | string
    wallet?: StringFieldUpdateOperationsInput | string
    referralCode?: StringFieldUpdateOperationsInput | string
    referredBy?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Bets?: BetUpdateManyWithoutUserNestedInput
    Auction?: AuctionUpdateManyWithoutUserNestedInput
    Duck?: DuckUpdateManyWithoutSponsoredByNestedInput
    Bonus?: BonusUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDepositInput = {
    id?: StringFieldUpdateOperationsInput | string
    wallet?: StringFieldUpdateOperationsInput | string
    referralCode?: StringFieldUpdateOperationsInput | string
    referredBy?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Bets?: BetUncheckedUpdateManyWithoutUserNestedInput
    Auction?: AuctionUncheckedUpdateManyWithoutUserNestedInput
    Duck?: DuckUncheckedUpdateManyWithoutSponsoredByNestedInput
    Bonus?: BonusUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutBonusInput = {
    id?: string
    wallet: string
    referralCode: string
    referredBy?: string | null
    balance?: number
    createdAt?: Date | string
    Bets?: BetCreateNestedManyWithoutUserInput
    Auction?: AuctionCreateNestedManyWithoutUserInput
    Duck?: DuckCreateNestedManyWithoutSponsoredByInput
    Deposit?: DepositCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBonusInput = {
    id?: string
    wallet: string
    referralCode: string
    referredBy?: string | null
    balance?: number
    createdAt?: Date | string
    Bets?: BetUncheckedCreateNestedManyWithoutUserInput
    Auction?: AuctionUncheckedCreateNestedManyWithoutUserInput
    Duck?: DuckUncheckedCreateNestedManyWithoutSponsoredByInput
    Deposit?: DepositUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBonusInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBonusInput, UserUncheckedCreateWithoutBonusInput>
  }

  export type UserUpsertWithoutBonusInput = {
    update: XOR<UserUpdateWithoutBonusInput, UserUncheckedUpdateWithoutBonusInput>
    create: XOR<UserCreateWithoutBonusInput, UserUncheckedCreateWithoutBonusInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBonusInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBonusInput, UserUncheckedUpdateWithoutBonusInput>
  }

  export type UserUpdateWithoutBonusInput = {
    id?: StringFieldUpdateOperationsInput | string
    wallet?: StringFieldUpdateOperationsInput | string
    referralCode?: StringFieldUpdateOperationsInput | string
    referredBy?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Bets?: BetUpdateManyWithoutUserNestedInput
    Auction?: AuctionUpdateManyWithoutUserNestedInput
    Duck?: DuckUpdateManyWithoutSponsoredByNestedInput
    Deposit?: DepositUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBonusInput = {
    id?: StringFieldUpdateOperationsInput | string
    wallet?: StringFieldUpdateOperationsInput | string
    referralCode?: StringFieldUpdateOperationsInput | string
    referredBy?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Bets?: BetUncheckedUpdateManyWithoutUserNestedInput
    Auction?: AuctionUncheckedUpdateManyWithoutUserNestedInput
    Duck?: DuckUncheckedUpdateManyWithoutSponsoredByNestedInput
    Deposit?: DepositUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BetCreateManyUserInput = {
    id?: string
    betType: string
    amount: number
    createdAt?: Date | string
    duckId: string
    raceId: string
  }

  export type AuctionCreateManyUserInput = {
    id?: string
    duckId: string
    amount?: number
    newName: string
    expiredAt: Date | string
    createdAt?: Date | string
  }

  export type DuckCreateManySponsoredByInput = {
    id?: string
    name: string
    color: string
    createdAt?: Date | string
  }

  export type DepositCreateManyUserInput = {
    id?: string
    amount: number
    createdAt?: Date | string
  }

  export type BonusCreateManyUserInput = {
    id?: string
    amount: number
    createdAt?: Date | string
  }

  export type BetUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    betType?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    duck?: DuckUpdateOneRequiredWithoutBetNestedInput
    Race?: RaceUpdateOneRequiredWithoutBetsNestedInput
  }

  export type BetUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    betType?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    duckId?: StringFieldUpdateOperationsInput | string
    raceId?: StringFieldUpdateOperationsInput | string
  }

  export type BetUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    betType?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    duckId?: StringFieldUpdateOperationsInput | string
    raceId?: StringFieldUpdateOperationsInput | string
  }

  export type AuctionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    newName?: StringFieldUpdateOperationsInput | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    duck?: DuckUpdateOneRequiredWithoutAuctionNestedInput
  }

  export type AuctionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    duckId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    newName?: StringFieldUpdateOperationsInput | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuctionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    duckId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    newName?: StringFieldUpdateOperationsInput | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DuckUpdateWithoutSponsoredByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Bet?: BetUpdateManyWithoutDuckNestedInput
    Auction?: AuctionUpdateManyWithoutDuckNestedInput
  }

  export type DuckUncheckedUpdateWithoutSponsoredByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Bet?: BetUncheckedUpdateManyWithoutDuckNestedInput
    Auction?: AuctionUncheckedUpdateManyWithoutDuckNestedInput
  }

  export type DuckUncheckedUpdateManyWithoutSponsoredByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepositUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepositUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepositUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BonusUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BonusUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BonusUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BetCreateManyRaceInput = {
    id?: string
    betType: string
    amount: number
    createdAt?: Date | string
    duckId: string
    userId: string
  }

  export type BetUpdateWithoutRaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    betType?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    duck?: DuckUpdateOneRequiredWithoutBetNestedInput
    user?: UserUpdateOneRequiredWithoutBetsNestedInput
  }

  export type BetUncheckedUpdateWithoutRaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    betType?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    duckId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type BetUncheckedUpdateManyWithoutRaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    betType?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    duckId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type BetCreateManyDuckInput = {
    id?: string
    betType: string
    amount: number
    createdAt?: Date | string
    userId: string
    raceId: string
  }

  export type AuctionCreateManyDuckInput = {
    id?: string
    userId?: string | null
    amount?: number
    newName: string
    expiredAt: Date | string
    createdAt?: Date | string
  }

  export type BetUpdateWithoutDuckInput = {
    id?: StringFieldUpdateOperationsInput | string
    betType?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBetsNestedInput
    Race?: RaceUpdateOneRequiredWithoutBetsNestedInput
  }

  export type BetUncheckedUpdateWithoutDuckInput = {
    id?: StringFieldUpdateOperationsInput | string
    betType?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    raceId?: StringFieldUpdateOperationsInput | string
  }

  export type BetUncheckedUpdateManyWithoutDuckInput = {
    id?: StringFieldUpdateOperationsInput | string
    betType?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    raceId?: StringFieldUpdateOperationsInput | string
  }

  export type AuctionUpdateWithoutDuckInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    newName?: StringFieldUpdateOperationsInput | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutAuctionNestedInput
  }

  export type AuctionUncheckedUpdateWithoutDuckInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    newName?: StringFieldUpdateOperationsInput | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuctionUncheckedUpdateManyWithoutDuckInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    newName?: StringFieldUpdateOperationsInput | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}