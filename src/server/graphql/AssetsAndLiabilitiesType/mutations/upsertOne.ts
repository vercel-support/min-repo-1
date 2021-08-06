import { mutationField, nonNull } from 'nexus'

export const AssetsAndLiabilitiesTypeUpsertOneMutation = mutationField(
  'upsertOneAssetsAndLiabilitiesType',
  {
    type: nonNull('AssetsAndLiabilitiesType'),
    args: {
      where: nonNull('AssetsAndLiabilitiesTypeWhereUniqueInput'),
      create: nonNull('AssetsAndLiabilitiesTypeCreateInput'),
      update: nonNull('AssetsAndLiabilitiesTypeUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.assetsAndLiabilitiesType.upsert({
        ...args,
        ...select,
      })
    },
  },
)
