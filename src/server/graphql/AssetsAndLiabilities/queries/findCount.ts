import { queryField, nonNull, list } from 'nexus'

export const AssetsAndLiabilitiesFindCountQuery = queryField(
  'findManyAssetsAndLiabilitiesCount',
  {
    type: nonNull('Int'),
    args: {
      where: 'AssetsAndLiabilitiesWhereInput',
      orderBy: list('AssetsAndLiabilitiesOrderByInput'),
      cursor: 'AssetsAndLiabilitiesWhereUniqueInput',
      distinct: 'AssetsAndLiabilitiesScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.assetsAndLiabilities.count(args as any)
    },
  },
)
