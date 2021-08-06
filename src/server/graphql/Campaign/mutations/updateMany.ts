import { mutationField, nonNull } from 'nexus'

export const CampaignUpdateManyMutation = mutationField('updateManyCampaign', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'CampaignWhereInput',
    data: nonNull('CampaignUpdateManyMutationInput'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.campaign.updateMany(args as any)
  },
})
