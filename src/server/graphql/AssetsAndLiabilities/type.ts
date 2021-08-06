import { objectType } from 'nexus'

export const AssetsAndLiabilities = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'AssetsAndLiabilities',
  definition(t) {
    t.string('id')
    t.nullable.int('amount')
    t.nullable.string('name')
    t.nullable.string('createdById')
    t.nullable.field('createdAt', { type: 'DateTime' })
    t.nullable.string('description')
    t.nullable.field('financialAccount', {
      type: 'FinancialAccount',
      resolve(root: any) {
        return root.financialAccount
      },
    })
    t.nullable.string('financialAccountId')
    t.nullable.field('household', {
      type: 'Account',
      resolve(root: any) {
        return root.household
      },
    })
    t.nullable.string('householdId')
    t.nullable.field('jointOwner', {
      type: 'Account',
      resolve(root: any) {
        return root.jointOwner
      },
    })
    t.nullable.string('jointOwnerId')
    t.nullable.field('lastModifiedBy', {
      type: 'User',
      resolve(root: any) {
        return root.lastModifiedBy
      },
    })
    t.nullable.string('lastModifiedById')
    t.nullable.field('updatedAt', { type: 'DateTime' })
    t.nullable.field('owner', {
      type: 'User',
      resolve(root: any) {
        return root.owner
      },
    })
    t.nullable.string('ownerId')
    t.nullable.field('ownership', {
      type: 'Ownership',
      resolve(root: any) {
        return root.ownership
      },
    })
    t.nullable.string('ownershipId')
    t.nullable.string('ownerType')
    t.nullable.field('primaryOwner', {
      type: 'Account',
      resolve(root: any) {
        return root.primaryOwner
      },
    })
    t.nullable.string('primaryOwnerId')
    t.nullable.field('assetsAndLiabilitiesRecordType', {
      type: 'AssetsAndLiabilitiesRecordType',
      resolve(root: any) {
        return root.assetsAndLiabilitiesRecordType
      },
    })
    t.nullable.string('assetsAndLiabilitiesRecordTypeId')
    t.nullable.field('assetsAndLiabilitiesSource', {
      type: 'AssetsAndLiabilitiesSource',
      resolve(root: any) {
        return root.assetsAndLiabilitiesSource
      },
    })
    t.nullable.string('assetsAndLiabilitiesSourceId')
    t.nullable.field('assetsAndLiabilitiesType', {
      type: 'AssetsAndLiabilitiesType',
      resolve(root: any) {
        return root.assetsAndLiabilitiesType
      },
    })
    t.nullable.string('assetsAndLiabilitiesTypeId')
    t.list.field('FinancialAccountAssetsAndLiabilities', {
      type: 'FinancialAccount',
      args: {
        where: 'FinancialAccountWhereInput',
        orderBy: 'FinancialAccountOrderByInput',
        cursor: 'FinancialAccountWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'FinancialAccountScalarFieldEnum',
      },
      resolve(root: any) {
        return root.FinancialAccountAssetsAndLiabilities
      },
    })
    t.nullable.field('_count', {
      type: 'AssetsAndLiabilitiesCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
