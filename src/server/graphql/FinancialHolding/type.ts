import { objectType } from 'nexus'

export const FinancialHolding = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'FinancialHolding',
  definition(t) {
    t.string('id')
    t.nullable.field('assetCategory', {
      type: 'AssetCategory',
      resolve(root: any) {
        return root.assetCategory
      },
    })
    t.nullable.string('assetCategoryId')
    t.nullable.field('assetCategorySector', {
      type: 'AssetCategorySector',
      resolve(root: any) {
        return root.assetCategorySector
      },
    })
    t.nullable.string('assetCategorySectorId')
    t.nullable.field('assetClass', {
      type: 'AssetClass',
      resolve(root: any) {
        return root.assetClass
      },
    })
    t.nullable.string('assetClassId')
    t.nullable.field('createdBy', {
      type: 'User',
      resolve(root: any) {
        return root.createdBy
      },
    })
    t.nullable.string('createdById')
    t.nullable.field('createdAt', { type: 'DateTime' })
    t.nullable.field('updatedAt', { type: 'DateTime' })
    t.nullable.field('financialAccount', {
      type: 'FinancialAccount',
      resolve(root: any) {
        return root.financialAccount
      },
    })
    t.nullable.string('financialAccountId')
    t.nullable.string('name')
    t.nullable.int('gainLoss')
    t.nullable.field('household', {
      type: 'Account',
      resolve(root: any) {
        return root.household
      },
    })
    t.nullable.string('householdId')
    t.nullable.field('lastModifiedBy', {
      type: 'User',
      resolve(root: any) {
        return root.lastModifiedBy
      },
    })
    t.nullable.string('lastModifiedById')
    t.nullable.int('marketValue')
    t.nullable.int('percentChange')
    t.nullable.int('price')
    t.nullable.field('primaryOwner', {
      type: 'Account',
      resolve(root: any) {
        return root.primaryOwner
      },
    })
    t.nullable.string('primaryOwnerId')
    t.nullable.int('purchasePrice')
    t.nullable.int('shares')
    t.nullable.field('securities', {
      type: 'Securities',
      resolve(root: any) {
        return root.securities
      },
    })
    t.nullable.string('securitiesId')
    t.nullable.string('symbol')
    t.list.field('FinancialAccountFinancialHolding', {
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
        return root.FinancialAccountFinancialHolding
      },
    })
    t.nullable.field('_count', {
      type: 'FinancialHoldingCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
