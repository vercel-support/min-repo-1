import { mutationField, nonNull } from 'nexus'

export const AssetsAndLiabilitiesUpsertOneMutation = mutationField(
  'upsertOneAssetsAndLiabilities',
  {
    type: nonNull('AssetsAndLiabilities'),
    args: {
      where: nonNull('AssetsAndLiabilitiesWhereUniqueInput'),
      create: nonNull('AssetsAndLiabilitiesCreateInput'),
      update: nonNull('AssetsAndLiabilitiesUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.assetsAndLiabilities.upsert({
        ...args,
        ...select,
      })
    },
  },
)
