import { objectType } from 'nexus'

export const Individual = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Individual',
  definition(t) {
    t.string('id')
    t.nullable.field('individualType', {
      type: 'IndividualType',
      resolve(root: any) {
        return root.individualType
      },
    })
    t.nullable.string('individualTypeId')
    t.nullable.field('birthDate', { type: 'DateTime' })
    t.nullable.boolean('hasOptedOutGeoTracking')
    t.nullable.int('consumerCreditScore')
    t.nullable.string('consumerCreditScoreProviderName')
    t.nullable.int('convictionsCount')
    t.nullable.field('createdBy', {
      type: 'User',
      resolve(root: any) {
        return root.createdBy
      },
    })
    t.nullable.string('createdById')
    t.nullable.field('createdAt', { type: 'DateTime' })
    t.nullable.field('deathDate', { type: 'DateTime' })
    t.nullable.boolean('hasOptedOutSolicit')
    t.nullable.boolean('hasOptedOutProcessing')
    t.nullable.boolean('hasOptedOutProfiling')
    t.nullable.boolean('hasOptedOutTracking')
    t.nullable.boolean('sendIndividualData')
    t.nullable.boolean('shouldForget')
    t.nullable.field('owner', {
      type: 'User',
      resolve(root: any) {
        return root.owner
      },
    })
    t.nullable.string('ownerId')
    t.nullable.int('individualsAge')
    t.nullable.int('influencerRating')
    t.nullable.boolean('isHomeOwner')
    t.nullable.field('lastModifiedBy', {
      type: 'User',
      resolve(root: any) {
        return root.lastModifiedBy
      },
    })
    t.nullable.string('lastModifiedById')
    t.nullable.field('lastModifiedDate', { type: 'DateTime' })
    t.nullable.string('militaryService')
    t.nullable.string('name')
    t.nullable.int('childrenCount')
    t.nullable.string('occupation')
    t.nullable.boolean('canStorePiiElsewhere')
    t.nullable.string('website')
    t.list.field('ContactIndividual', {
      type: 'Contact',
      args: {
        where: 'ContactWhereInput',
        orderBy: 'ContactOrderByInput',
        cursor: 'ContactWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'ContactScalarFieldEnum',
      },
      resolve(root: any) {
        return root.ContactIndividual
      },
    })
    t.list.field('AccountIndividual', {
      type: 'Account',
      args: {
        where: 'AccountWhereInput',
        orderBy: 'AccountOrderByInput',
        cursor: 'AccountWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'AccountScalarFieldEnum',
      },
      resolve(root: any) {
        return root.AccountIndividual
      },
    })
    t.list.field('UserIndividual', {
      type: 'User',
      args: {
        where: 'UserWhereInput',
        orderBy: 'UserOrderByInput',
        cursor: 'UserWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'UserScalarFieldEnum',
      },
      resolve(root: any) {
        return root.UserIndividual
      },
    })
    t.nullable.field('_count', {
      type: 'IndividualCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
