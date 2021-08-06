import { queryField, nonNull, list } from 'nexus'

export const AssetStatusReasonFindCountQuery = queryField(
  'findManyAssetStatusReasonCount',
  {
    type: nonNull('Int'),
    args: {
      where: 'AssetStatusReasonWhereInput',
      orderBy: list('AssetStatusReasonOrderByInput'),
      cursor: 'AssetStatusReasonWhereUniqueInput',
      distinct: 'AssetStatusReasonScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.assetStatusReason.count(args as any)
    },
  },
)
