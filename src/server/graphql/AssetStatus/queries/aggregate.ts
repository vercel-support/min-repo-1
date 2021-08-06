import { queryField, list } from 'nexus'

export const AssetStatusAggregateQuery = queryField('aggregateAssetStatus', {
  type: 'AggregateAssetStatus',
  args: {
    where: 'AssetStatusWhereInput',
    orderBy: list('AssetStatusOrderByInput'),
    cursor: 'AssetStatusWhereUniqueInput',
    distinct: 'AssetStatusScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.assetStatus.aggregate({ ...args, ...select }) as any
  },
})
