import { mutationField, nonNull } from 'nexus'

export const AssetsAndLiabilitiesSourceUpdateManyMutation = mutationField(
  'updateManyAssetsAndLiabilitiesSource',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'AssetsAndLiabilitiesSourceWhereInput',
      data: nonNull('AssetsAndLiabilitiesSourceUpdateManyMutationInput'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.assetsAndLiabilitiesSource.updateMany(args as any)
    },
  },
)
