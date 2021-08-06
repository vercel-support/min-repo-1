import { queryField, nonNull, list } from 'nexus'

export const AssetsAndLiabilitiesSourceFindCountQuery = queryField(
  'findManyAssetsAndLiabilitiesSourceCount',
  {
    type: nonNull('Int'),
    args: {
      where: 'AssetsAndLiabilitiesSourceWhereInput',
      orderBy: list('AssetsAndLiabilitiesSourceOrderByInput'),
      cursor: 'AssetsAndLiabilitiesSourceWhereUniqueInput',
      distinct: 'AssetsAndLiabilitiesSourceScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.assetsAndLiabilitiesSource.count(args as any)
    },
  },
)
