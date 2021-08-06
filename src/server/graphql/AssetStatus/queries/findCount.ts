import { queryField, nonNull, list } from 'nexus'

export const AssetStatusFindCountQuery = queryField(
  'findManyAssetStatusCount',
  {
    type: nonNull('Int'),
    args: {
      where: 'AssetStatusWhereInput',
      orderBy: list('AssetStatusOrderByInput'),
      cursor: 'AssetStatusWhereUniqueInput',
      distinct: 'AssetStatusScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.assetStatus.count(args as any)
    },
  },
)
