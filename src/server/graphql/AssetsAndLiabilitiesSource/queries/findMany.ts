import { queryField, nonNull, list } from 'nexus'

export const AssetsAndLiabilitiesSourceFindManyQuery = queryField(
  'findManyAssetsAndLiabilitiesSource',
  {
    type: nonNull(list(nonNull('AssetsAndLiabilitiesSource'))),
    args: {
      where: 'AssetsAndLiabilitiesSourceWhereInput',
      orderBy: list('AssetsAndLiabilitiesSourceOrderByInput'),
      cursor: 'AssetsAndLiabilitiesSourceWhereUniqueInput',
      distinct: 'AssetsAndLiabilitiesSourceScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.assetsAndLiabilitiesSource.findMany({
        ...args,
        ...select,
      })
    },
  },
)
