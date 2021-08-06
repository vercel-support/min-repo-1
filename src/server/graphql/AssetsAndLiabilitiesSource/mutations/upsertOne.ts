import { mutationField, nonNull } from 'nexus'

export const AssetsAndLiabilitiesSourceUpsertOneMutation = mutationField(
  'upsertOneAssetsAndLiabilitiesSource',
  {
    type: nonNull('AssetsAndLiabilitiesSource'),
    args: {
      where: nonNull('AssetsAndLiabilitiesSourceWhereUniqueInput'),
      create: nonNull('AssetsAndLiabilitiesSourceCreateInput'),
      update: nonNull('AssetsAndLiabilitiesSourceUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.assetsAndLiabilitiesSource.upsert({
        ...args,
        ...select,
      })
    },
  },
)
