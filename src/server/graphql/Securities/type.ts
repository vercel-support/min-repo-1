import { objectType } from 'nexus'

export const Securities = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Securities',
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
    t.nullable.string('CUSIP')
    t.nullable.field('exchange', {
      type: 'Exchange',
      resolve(root: any) {
        return root.exchange
      },
    })
    t.nullable.string('exchangeId')
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
    t.nullable.int('price')
    t.nullable.string('symbol')
    t.list.field('FinancialHoldingSecurities', {
      type: 'FinancialHolding',
      args: {
        where: 'FinancialHoldingWhereInput',
        orderBy: 'FinancialHoldingOrderByInput',
        cursor: 'FinancialHoldingWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'FinancialHoldingScalarFieldEnum',
      },
      resolve(root: any) {
        return root.FinancialHoldingSecurities
      },
    })
    t.nullable.field('_count', {
      type: 'SecuritiesCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
