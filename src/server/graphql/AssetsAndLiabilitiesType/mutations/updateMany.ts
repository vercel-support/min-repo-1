import { mutationField, nonNull } from 'nexus'

export const AssetsAndLiabilitiesTypeUpdateManyMutation = mutationField(
  'updateManyAssetsAndLiabilitiesType',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'AssetsAndLiabilitiesTypeWhereInput',
      data: nonNull('AssetsAndLiabilitiesTypeUpdateManyMutationInput'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.assetsAndLiabilitiesType.updateMany(args as any)
    },
  },
)
