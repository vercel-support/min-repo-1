import { queryField, list } from 'nexus'

export const AssetStatusReasonFindFirstQuery = queryField(
  'findFirstAssetStatusReason',
  {
    type: 'AssetStatusReason',
    args: {
      where: 'AssetStatusReasonWhereInput',
      orderBy: list('AssetStatusReasonOrderByInput'),
      cursor: 'AssetStatusReasonWhereUniqueInput',
      distinct: 'AssetStatusReasonScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.assetStatusReason.findFirst({
        ...args,
        ...select,
      })
    },
  },
)
