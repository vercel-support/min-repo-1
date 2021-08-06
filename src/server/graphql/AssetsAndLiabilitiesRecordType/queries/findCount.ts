import { queryField, nonNull, list } from 'nexus'

export const AssetsAndLiabilitiesRecordTypeFindCountQuery = queryField(
  'findManyAssetsAndLiabilitiesRecordTypeCount',
  {
    type: nonNull('Int'),
    args: {
      where: 'AssetsAndLiabilitiesRecordTypeWhereInput',
      orderBy: list('AssetsAndLiabilitiesRecordTypeOrderByInput'),
      cursor: 'AssetsAndLiabilitiesRecordTypeWhereUniqueInput',
      distinct: 'AssetsAndLiabilitiesRecordTypeScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.assetsAndLiabilitiesRecordType.count(args as any)
    },
  },
)
