import { queryField, list } from 'nexus'

export const AssetStatusReasonAggregateQuery = queryField(
  'aggregateAssetStatusReason',
  {
    type: 'AggregateAssetStatusReason',
    args: {
      where: 'AssetStatusReasonWhereInput',
      orderBy: list('AssetStatusReasonOrderByInput'),
      cursor: 'AssetStatusReasonWhereUniqueInput',
      distinct: 'AssetStatusReasonScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.assetStatusReason.aggregate({ ...args, ...select }) as any
    },
  },
)
