import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Location = {
  __typename?: 'Location';
  climate: Scalars['String']['output'];
  films: Array<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  surface_water: Scalars['String']['output'];
  terrain: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type Movie = {
  __typename?: 'Movie';
  description: Scalars['String']['output'];
  director: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  locations: Array<Scalars['String']['output']>;
  original_title: Scalars['String']['output'];
  original_title_romanised: Scalars['String']['output'];
  people: Array<Scalars['String']['output']>;
  producer: Scalars['String']['output'];
  release_date: Scalars['String']['output'];
  rt_score: Scalars['String']['output'];
  running_time: Scalars['String']['output'];
  species: Array<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  url: Scalars['String']['output'];
  vehicles: Array<Scalars['String']['output']>;
};

export type People = {
  __typename?: 'People';
  eye_color: Scalars['String']['output'];
  films: Array<Scalars['String']['output']>;
  gender: Scalars['String']['output'];
  hair_color: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  species: Array<Scalars['String']['output']>;
  url: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  allLocations: Array<Location>;
  allMovies: Array<Movie>;
  allPeople: Array<People>;
  allSpecies: Array<Species>;
  allVehicles: Array<Vehicle>;
  location?: Maybe<Location>;
  movie?: Maybe<Movie>;
  person?: Maybe<People>;
  species?: Maybe<Species>;
  vehicle?: Maybe<Vehicle>;
};


export type QueryLocationArgs = {
  id: Scalars['ID']['input'];
};


export type QueryMovieArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPersonArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySpeciesArgs = {
  id: Scalars['ID']['input'];
};


export type QueryVehicleArgs = {
  id: Scalars['ID']['input'];
};

export type Species = {
  __typename?: 'Species';
  classification: Scalars['String']['output'];
  eye_colors: Scalars['String']['output'];
  films: Array<Scalars['String']['output']>;
  hair_colors: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  people: Array<Scalars['String']['output']>;
  url: Scalars['String']['output'];
};

export type Vehicle = {
  __typename?: 'Vehicle';
  description: Scalars['String']['output'];
  films: Array<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  length: Scalars['String']['output'];
  name: Scalars['String']['output'];
  pilot: Array<Scalars['String']['output']>;
  url: Scalars['String']['output'];
  vehicle_class: Scalars['String']['output'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Location: ResolverTypeWrapper<Location>;
  Movie: ResolverTypeWrapper<Movie>;
  People: ResolverTypeWrapper<People>;
  Query: ResolverTypeWrapper<{}>;
  Species: ResolverTypeWrapper<Species>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Vehicle: ResolverTypeWrapper<Vehicle>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  ID: Scalars['ID']['output'];
  Location: Location;
  Movie: Movie;
  People: People;
  Query: {};
  Species: Species;
  String: Scalars['String']['output'];
  Vehicle: Vehicle;
};

export type LocationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Location'] = ResolversParentTypes['Location']> = {
  climate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  films?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  surface_water?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  terrain?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MovieResolvers<ContextType = any, ParentType extends ResolversParentTypes['Movie'] = ResolversParentTypes['Movie']> = {
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  director?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  locations?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  original_title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  original_title_romanised?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  people?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  producer?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  release_date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rt_score?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  running_time?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  species?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  vehicles?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PeopleResolvers<ContextType = any, ParentType extends ResolversParentTypes['People'] = ResolversParentTypes['People']> = {
  eye_color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  films?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  gender?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hair_color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  species?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  allLocations?: Resolver<Array<ResolversTypes['Location']>, ParentType, ContextType>;
  allMovies?: Resolver<Array<ResolversTypes['Movie']>, ParentType, ContextType>;
  allPeople?: Resolver<Array<ResolversTypes['People']>, ParentType, ContextType>;
  allSpecies?: Resolver<Array<ResolversTypes['Species']>, ParentType, ContextType>;
  allVehicles?: Resolver<Array<ResolversTypes['Vehicle']>, ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['Location']>, ParentType, ContextType, RequireFields<QueryLocationArgs, 'id'>>;
  movie?: Resolver<Maybe<ResolversTypes['Movie']>, ParentType, ContextType, RequireFields<QueryMovieArgs, 'id'>>;
  person?: Resolver<Maybe<ResolversTypes['People']>, ParentType, ContextType, RequireFields<QueryPersonArgs, 'id'>>;
  species?: Resolver<Maybe<ResolversTypes['Species']>, ParentType, ContextType, RequireFields<QuerySpeciesArgs, 'id'>>;
  vehicle?: Resolver<Maybe<ResolversTypes['Vehicle']>, ParentType, ContextType, RequireFields<QueryVehicleArgs, 'id'>>;
};

export type SpeciesResolvers<ContextType = any, ParentType extends ResolversParentTypes['Species'] = ResolversParentTypes['Species']> = {
  classification?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  eye_colors?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  films?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  hair_colors?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  people?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VehicleResolvers<ContextType = any, ParentType extends ResolversParentTypes['Vehicle'] = ResolversParentTypes['Vehicle']> = {
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  films?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  length?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pilot?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  vehicle_class?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Location?: LocationResolvers<ContextType>;
  Movie?: MovieResolvers<ContextType>;
  People?: PeopleResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Species?: SpeciesResolvers<ContextType>;
  Vehicle?: VehicleResolvers<ContextType>;
};

