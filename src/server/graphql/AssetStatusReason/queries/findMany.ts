import { queryField, nonNull, list } from 'nexus'

export const AssetStatusReasonFindManyQuery = queryField(
  'findManyAssetStatusReason',
  {
    type: nonNull(list(nonNull('AssetStatusReason'))),
    args: {
      where: 'AssetStatusReasonWhereInput',
      orderBy: list('AssetStatusReasonOrderByInput'),
      cursor: 'AssetStatusReasonWhereUniqueInput',
      distinct: 'AssetStatusReasonScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.assetStatusReason.findMany({
        ...args,
        ...select,
      })
    },
  },
)
